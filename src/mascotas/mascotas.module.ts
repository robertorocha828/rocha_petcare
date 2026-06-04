import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MascotasService } from './mascotas.service';
import { MascotasController } from './mascotas.controller';
import { Mascota } from './mascota.entity';
import { Especie } from '../especies/especie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mascota, Especie])],
  controllers: [MascotasController],
  providers: [MascotasService],
})
export class MascotasModule {}