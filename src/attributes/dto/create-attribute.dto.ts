import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAttributeDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  tableId: number;
}
