import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { ChangePasswordDto, EditUserDto } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable({})
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async editUser(userId: number, dto: EditUserDto) {
    try {
      const user = await this.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          email: dto.email,
          firstname: dto.firstName,
          lastname: dto.lastName,
        },
      });

      delete user.hash;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
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

    console.log(user)
    delete user.hash;
    return user;
  }
}
