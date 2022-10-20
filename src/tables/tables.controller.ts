import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
} from "@nestjs/common";
import { Request } from "express";
import { CreateTablesDto, EditTablesDto } from "./dto";
import { TablesService } from "./tables.service";

@Controller("tables")
export class TablesController {
  constructor(private tablesService: TablesService) {}

  @Post("create")
  create(@Body() dto: CreateTablesDto) {
    return this.tablesService.create(dto);
  }
  @Post("importDb")
  importDb(@Req() req: Request) {
    return this.tablesService.importDbTable(req.body);
  }

  @Get()
  getAll() {
    return this.tablesService.getAll();
  }

  @Patch("refresh")
  refresh() {
    return this.tablesService.refresh();
  }

  @Get("search/:tableName/:column/:id")
  findPk(
    @Param("tableName") tableName: string,
    @Param("column") column: string,
    @Param("id")
    id: number
  ) {
    return this.tablesService.getByIdName(tableName, column, id);
  }

  @Post("init")
  add() {
    return this.tablesService.init();
  }

  @Get("/one/:name")
  getOneByName(
    @Param("name")
    name: string
  ) {
    return this.tablesService.getOneByName(name);
  }
  @Get(":id")
  getOne(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })
    )
    id: number
  ) {
    return this.tablesService.getOne(id);
  }

  @Delete(":id")
  delete(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })
    )
    id: number
  ) {
    return this.tablesService.delete(id);
  }

  @Delete("")
  deleteAll() {
    return this.tablesService.deleteAll();
  }

  @Patch(":id")
  edit(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })
    )
    id: number,
    @Body() dto: EditTablesDto
  ) {
    return this.tablesService.edit(id, dto);
  }
}
