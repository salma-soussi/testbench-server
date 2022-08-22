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
}
