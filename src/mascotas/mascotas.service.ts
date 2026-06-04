import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mascota } from './mascota.entity';
import { Especie } from '../especies/especie.entity';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';

@Injectable()
export class MascotasService {
  mascotaRepository: any;
  constructor(
    @InjectRepository(Mascota)
    private readonly socioRepository: Repository<Mascota>,

    @InjectRepository(Especie)
    private readonly planRepository: Repository<Especie>,
  ) {}

  async create(createMascotaDto: CreateMascotaDto) {
    const especie = await this.planRepository.findOne({ where: { id: createMascotaDto.especieId } });
    if (!especie) throw new NotFoundException('Especie no encontrado');

    const mascota = this.mascotaRepository.create({
      nombre:      createMascotaDto.nombre,
      chip:      createMascotaDto.chip,
      peso_kg: createMascotaDto.peso_kg ?? 0,
      edad:      createMascotaDto.edad ?? true,
      estado_vacunado:      createMascotaDto.estado_vacunado ?? true,
      especie,
    });
    return this.socioRepository.save(mascota);
  }

  findAll() {
    return this.socioRepository.find();
  }

  async findOne(id: string) {
    const mascota = await this.socioRepository.findOne({ where: { id } });
    if (!mascota) throw new NotFoundException('Mascota no encontrado');
    return mascota;
  }

  async update(id: string, updateMascotaDto: UpdateMascotaDto) {
    const mascota = await this.findOne(id);

    if (updateMascotaDto.especieId) {
      const especie = await this.planRepository.findOne({ where: { id: updateMascotaDto.especieId } });
      if (!especie) throw new NotFoundException('Especie no encontrado');
      mascota.especie = especie;
    }

    Object.assign(mascota, updateMascotaDto);
    return this.socioRepository.save(mascota);
  }

  async remove(id: string) {
    const mascota = await this.findOne(id);
    return this.socioRepository.remove(mascota);
  }
}