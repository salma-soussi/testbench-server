import { IsOptional, IsString } from 'class-validator';

export class EditAttributeDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  type: string;

  @IsString()
  @IsOptional()
  description: string;
}
