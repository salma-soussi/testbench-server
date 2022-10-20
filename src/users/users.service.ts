import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from "argon2";
import { ChangePasswordDto, EditUserDto } from "./dto";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

@Injectable({})
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        createAt: true,
        updatedAt: true,
      },
    });
    return users;
  }

  async getOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        firstname: true,
        lastname: true,
        email: true,
        createAt: true,
        updatedAt: true,
      },
    });
    return user;
  }
  async editUser(userId: number, dto: EditUserDto) {
    try {
      const user = await this.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          ...dto,
        },
      });

      delete user.hash;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new ForbiddenException("Credentials taken");
        }
      }
      throw error;
    }
  }

  async edit(id: number, dto: EditUserDto) {
    try {
      const user = this.prisma.user.update({
        where: {
          id: id,
        },
        data: {
          ...dto,
        },
      });
      return user;
    } catch (error) {
      console.log("error")
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new ForbiddenException("Credentials taken");
        }
      }
      throw error;
    }
  }

  async delete(id: number) {
    const table = this.prisma.user.delete({
      where: {
        id: id,
      },
      select: {
        firstname: true,
        lastname: true,
      },
    });
    return table;
  }

  async changePassword(userId: number, dto: ChangePasswordDto) {
    // generate the password hash
    const hash = await argon.hash(dto.password);

    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        hash,
      },
    });

    console.log(user);
    delete user.hash;
    return user;
  }
}
