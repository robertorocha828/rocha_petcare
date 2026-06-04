import { IsString, IsUUID, IsInt, IsBoolean, IsOptional, Min, IsNumber } from 'class-validator';

export class CreateMascotaDto {
  @IsUUID()
  especieId?: string;

  @IsString()
  nombre?: string;

  @IsString()
  chip?: string;

  @IsNumber()
  peso_kg?: number;

  @IsNumber()
  edad?: string;

  @IsBoolean()
  estado_vacunado?: boolean;
  categoriaId: any;


}