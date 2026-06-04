import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Especie } from '../especies/especie.entity';

@Entity('mascotas')
export class Mascota {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @ManyToOne(() => Especie, (especie) => especie.mascotas, { eager: true, onDelete: 'RESTRICT' })
  especie?: Especie;

  @Column()
  nombre?: string;

  @Column()
  chip?: string;

  @Column()
  peso_kg?: number;

  @Column()
  edad?: number;

  @Column()
  estado_vacunado?: boolean;
  categoria: any;

}