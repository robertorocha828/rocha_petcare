import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { MascotasService } from './mascotas.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';

@Controller('mascotas')
export class MascotasController {
  constructor(private readonly sociosService: MascotasService) {}

  @Post()
  create(@Body() createMascotaDto: CreateMascotaDto) {
    return this.sociosService.create(createMascotaDto);
  }

  @Get()
  findAll() {
    return this.sociosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sociosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMascotaDto: UpdateMascotaDto) {
    return this.sociosService.update(id, updateMascotaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sociosService.remove(id);
  }
}