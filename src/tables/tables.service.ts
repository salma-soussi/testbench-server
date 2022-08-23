import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTablesDto, EditTablesDto } from './dto';

@Injectable()
export class TablesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTablesDto) {
    const table = await this.prisma.table.create({
      data: {
        name: dto.name,
        rowCount: dto.rowCount,
        numForeignKey: dto.numForeignKey,
        description: dto.description,
        categories: {
          connect: {
            id: dto.categoryId,
          },
        },
      },
    });
    return table;
  }

  async getAll() {
    const tables = await this.prisma.table.findMany();
    return tables;
  }

  async getOne(id: number) {
    const table = await this.prisma.table.findUnique({
      where: {
        id: id,
      },
    });
    return table;
  }

  async delete(id: number) {
    const table = this.prisma.table.delete({
      where: {
        id: id,
      },
      select: {
        name: true,
      },
    });
    return table;
  }

  async edit(id: number, dto: EditTablesDto) {
    const table = this.prisma.table.update({
      where: {
        id: id,
      },
      data: {
        ...dto,
      },
    });
    return table;
  }

  async findFk(tableName: string) {
    const tables = await this.prisma.$queryRawUnsafe(
      `EXEC sp_fkeys @pktable_name = ${tableName} , @pktable_owner = TestbenchVisualisation`,
    );
    return tables;
  }

  async init() {
    const tablesNames: [{ TABLE_NAME: string }] = await this.prisma
      .$queryRaw`SELECT TABLE_NAME FROM Testbench.INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'`;

    const nbFk = Promise.all(
      tablesNames.map(async (name) => {
        const realName = 'TestbenchVisualisation.' + name.TABLE_NAME;

        const res: [{ number_foreign_Key: number }] = await this.prisma
          .$queryRaw`SELECT  count(OBJECT_NAME(parent_object_id)) AS [number_foreign_Key]  FROM sys.foreign_keys WHERE parent_object_id = OBJECT_ID(${realName})`;
        return res;
      }),
    );

    const nbRow = Promise.all(
      tablesNames.map(async (name) => {
        const realName = 'TestbenchVisualisation.' + name.TABLE_NAME;
        const res: [{ rowCount: number }] = await this.prisma.$queryRawUnsafe(
          `SELECT COUNT(*) AS [rowCount]  FROM ${realName}`,
        );
        return res;
      }),
    );

    const test = Promise.all([tablesNames, nbFk, nbRow]).then((val) => {
      const result = {
        tablesNames: val[0].flat(),
        tablesFkNum: val[1].flat(),
        tablesRowNum: val[2].flat(),
      };
      return result;
    });

    const all = [];
    for (let i = 0; i < (await test).tablesNames.length; i++) {
      const table = await this.prisma.table.create({
        data: {
          name: (await test).tablesNames[i].TABLE_NAME,
          rowCount: (await test).tablesRowNum[i].rowCount,
          numForeignKey: (await test).tablesFkNum[i].number_foreign_Key,
        },
      });
      all.push(table);
    }

    return all;
  }
}
