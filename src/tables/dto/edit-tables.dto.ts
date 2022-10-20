import { IsNumber, IsOptional, IsString } from 'class-validator';

export class EditTablesDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  numForeignKey?: number;

}
