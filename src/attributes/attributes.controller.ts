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
import { AttributesService } from "./attributes.service";
import { CreateAttributeDto, EditAttributeDto } from "./dto";

@Controller("attributes")
export class AttributesController {
  constructor(private attributesService: AttributesService) {}

  @Post("add")
  create(@Body() dto: CreateAttributeDto) {
    return this.attributesService.create(dto);
  }

  @Post("importDb")
  importDb(@Req() req: Request) {
    return this.attributesService.importDbAttribute(req.body);
  }

  @Post("relations")
  importRelationship(@Req() req: Request) {
    return this.attributesService.importRelations(req.body);
  }

  @Get("relations")
  exportRelation() {
    return this.attributesService.exportRelations();
  }

  @Get()
  getAll() {
    return this.attributesService.getAll();
  }

  @Patch("init")
  init() {
    return this.attributesService.init();
  }

  @Get("name/:tableName")
  findFk(@Param("tableName") tableName: string) {
    return this.attributesService.findName(tableName);
  }

  @Get(":id")
  getOne(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })
    )
    id: number
  ) {
    return this.attributesService.getOne(id);
  }

  @Get("table/:id")
  getByTableId(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })
    )
    id: number
  ) {
    return this.attributesService.getByTableId(id);
  }

  @Delete(":id")
  delete(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })
    )
    id: number
  ) {
    return this.attributesService.delete(id);
  }

  @Delete()
  deleteAll() {
    return this.attributesService.deleteAll();
  }

  @Delete("table/:id")
  deleteOfTable(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })
    )
    id: number
  ) {
    return this.attributesService.deleteOfTable(id);
  }

  @Patch(":id")
  edit(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })
    )
    id: number,
    @Body() dto: EditAttributeDto
  ) {
    return this.attributesService.edit(id, dto);
  }
}
