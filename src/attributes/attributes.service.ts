import { ConsoleLogger, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAttributeDto, EditAttributeDto } from './dto';

@Injectable()
export class AttributesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateAttributeDto) {
    const attribute = this.prisma.attribute.create({
      data: {
        name: dto.name,
        type: dto.type,
        description: dto.description,
        owner: {
          connect: {
            id: dto.tableId,
          },
        },
      },
    });
    return attribute;
  }

  async getAll() {
    const attributes = await this.prisma.attribute.findMany();
    return attributes;
  }

  async getOne(id: number) {
    const attribute = await this.prisma.attribute.findUnique({
      where: {
        id: id,
      },
    });
    return attribute;
  }

  async delete(id: number) {
    const attribute = this.prisma.attribute.delete({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return attribute;
  }

  async edit(id: number, dto: EditAttributeDto) {
    const attribute = this.prisma.attribute.update({
      where: {
        id: id,
      },
      data: {
        name: dto.name,
        type: dto.type,
        description: dto.description,
      },
    });
    return attribute;
  }

  async init() {
    const tablesNames: [{ TABLE_NAME: string }] = await this.prisma
      .$queryRaw`SELECT TABLE_NAME FROM Testbench.INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'`;

    const nameType = Promise.all(
      tablesNames.map(async (name) => {
        const realName = 'TestbenchVisualisation.' + name.TABLE_NAME;
        const res: [{ COLUMN_NAME: string; DATA_TYPE: string }] = await this
          .prisma
          .$queryRaw`SELECT COLUMN_NAME,DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME =${name.TABLE_NAME}`;
        return res;
      }),
    );

    const test = Promise.all([tablesNames, nameType]).then((val) => {
      const result = {
        tablesNames: val[0].flat(),
        columnNameType: val[1],
      };
      return result;
    });

    const all = [];
    for (let i = 0; i < (await test).tablesNames.length; i++) {
      for (let j = 0; j < (await test).columnNameType[i].length; j++) {
        const attribute = await this.prisma.attribute.create({
          data: {
            name: (await test).columnNameType[i][j].COLUMN_NAME,
            type: (await test).columnNameType[i][j].DATA_TYPE,
            owner: {
              connect: {
                name: (await test).tablesNames[i].TABLE_NAME,
              },
            },
          },
        });
        all.push(attribute);
      }
    }

    return all;
  }
}
