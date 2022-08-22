import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTablesDto {
  @IsString()
  name: string;

  @IsNumber()
  rowCount?: number;

  @IsNumber()
  @IsOptional()
  numForeignKey?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsOptional()
  @IsNumber()
  categoryId?: number;
}
