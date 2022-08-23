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
} from '@nestjs/common';
import { AttributesService } from './attributes.service';
import { CreateAttributeDto, EditAttributeDto } from './dto';

@Controller('attributes')
export class AttributesController {
  constructor(private attributesService: AttributesService) {}

  @Post('add')
  create(@Body() dto: CreateAttributeDto) {
    return this.attributesService.create(dto);
  }

  @Get()
  getAll() {
    return this.attributesService.getAll();
  }

  @Post('init')
  add() {
    return this.attributesService.init();
  }

  @Get(':id')
  getOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
    )
    id: number,
  ) {
    return this.attributesService.getOne(id);
  }

  @Delete(':id')
  delete(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
    )
    id: number,
  ) {
    return this.attributesService.delete(id);
  }

  @Patch(':id')
  edit(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
    )
    id: number,
    @Body() dto: EditAttributeDto,
  ) {
    return this.attributesService.edit(id, dto);
  }
}
