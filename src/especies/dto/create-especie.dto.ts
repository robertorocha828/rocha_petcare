import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class CreateEspecieDto {
  @IsString()
  nombre?: string;

  @IsString()
  chip?: String;

}