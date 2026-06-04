import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class UpdateEspecieDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsString()
  chip?: number;

}