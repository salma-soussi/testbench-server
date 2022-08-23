import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryDto } from './dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CategoryDto) {
    const category = this.prisma.category.create({
      data: {
        ...dto,
      },
    });
    return category;
  }

  async getAll() {
    const categories = await this.prisma.category.findMany();
    return categories;
  }

  async getOne(id: number) {
    const category = await this.prisma.category.findUnique({
      where: {
        id: id,
      },
    });
    return category;
  }

  async delete(id: number) {
    const category = this.prisma.category.delete({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return category;
  }

  async edit(id: number, dto: CategoryDto) {
    const category = this.prisma.category.update({
      where: {
        id: id,
      },
      data: {
        name: dto.name,
      },
    });
    return category;
  }
}
