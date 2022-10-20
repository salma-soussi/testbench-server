import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Req,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { Request } from "express";
import { User } from "prisma/generated/client1";
import { GetUser } from "src/auth/decorator/get-user.decorator";
import { JwtGuard } from "src/auth/guard";
import { ChangePasswordDto, EditUserDto } from "./dto";
import { UsersService } from "./users.service";

@UseGuards(JwtGuard)
@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get("me")
  getMe(@GetUser() user: User) {
    return user;
  }

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get(":id")
  getOne(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })
    )
    id: number
  ) {
    return this.userService.getOne(id);
  }

  @Delete(":id")
  delete(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })
    )
    id: number
  ) {
    return this.userService.delete(id);
  }

  @Patch(":id")
  edit(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })
    )
    id: number,
    @Body() dto: EditUserDto
  ) {
    return this.userService.edit(id, dto);
  }
  @Patch()
  updateUser(@GetUser("id") userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }

  @Patch("changePassword")
  changePassword(
    @GetUser("id") userId: number,
    @Body() dto: ChangePasswordDto
  ) {
    return this.userService.changePassword(userId, dto);
  }
}
