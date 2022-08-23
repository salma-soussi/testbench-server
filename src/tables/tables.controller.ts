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
import { CreateTablesDto, EditTablesDto } from './dto';
import { TablesService } from './tables.service';

@Controller('tables')
export class TablesController {
  constructor(private tablesService: TablesService) {}

  @Post('create')
  create(@Body() dto: CreateTablesDto) {
    return this.tablesService.create(dto);
  }

  @Get()
  getAll() {
    return this.tablesService.getAll();
  }

  @Get('fk/:tableName')
  findFk(@Param('tableName') tableName: string) {
    return this.tablesService.findFk(tableName);
  }

  @Post('init')
  add() {
    return this.tablesService.init();
  }

  @Get(':id')
  getOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
    )
    id: number,
  ) {
    return this.tablesService.getOne(id);
  }

  @Delete(':id')
  delete(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
    )
    id: number,
  ) {
    return this.tablesService.delete(id);
  }

  @Patch(':id')
  edit(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND }),
    )
    id: number,
    @Body() dto: EditTablesDto,
  ) {
    return this.tablesService.edit(id, dto);
  }
}
