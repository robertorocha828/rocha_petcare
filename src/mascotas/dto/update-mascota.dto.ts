import { IsString, IsUUID, IsInt, IsBoolean, IsOptional, Min } from 'class-validator';

export class UpdateMascotaDto {
  @IsString()
  nombre?: string;

  @IsString()
  chip?: string;

  @IsString()
  peso_kg?: string;

  @IsString()
  edad?: string;

  @IsString()
  estado_vacunado?: string;
    especieId: any;
}