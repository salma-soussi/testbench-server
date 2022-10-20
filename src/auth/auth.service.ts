import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from "argon2";
import { AuthDto, LogDto } from "./dto";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { User } from "prisma/generated/client1";

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) {}

  async signUp(dto: AuthDto) {
    // generate the password hash
    const hash = await argon.hash(dto.password);
    // save the new user in the db
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
          firstname: dto.firstname,
          lastname: dto.lastname,
        },
      });

      return this.signToken(user.id, user.email, user);
    } catch (error) {
      console.log(error);
      console.log(error.code === "P2002");

      if (error.code === "P2002") {
        throw new ForbiddenException("Credentials taken");
      }
      throw error;
    }
  }

  async signIn(dto: LogDto) {
    // find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // if user does not exist throw exception
    if (!user) {
      throw new ForbiddenException("The email is incorrect");
    }
    // compare password
    const pwMatches = await argon.verify(user.hash, dto.password);
    // if password incorrect throw exception
    if (!pwMatches) {
      throw new ForbiddenException("The password is incorrect");
    }
    // send back the user
    return this.signToken(user.id, user.email, user);
  }

  async signToken(
    userId: number,
    email: string,
    user: any
  ): Promise<{ access_token: string; user: any }> {
    const payload = {
      sub: userId,
      email,
    };

    const secret = this.config.get("JWT_SECRET");

    const token = await this.jwt.signAsync(payload, {
      secret: secret,
    });

    return {
      access_token: token,
      user: user,
    };
  }
}
