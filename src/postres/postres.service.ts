// src/postres/postres.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostreDto } from './dto/create-postre.dto';
import { UpdatePostreDto } from './dto/update-postre.dto'; // Asegúrate de importarlo aquí

@Injectable()
export class PostresService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePostreDto) {
    return this.prisma.postre.create({ data });
  }

  async findAll() {
    return this.prisma.postre.findMany();
  }

  async findOne(id: number) {
    return this.prisma.postre.findUnique({ where: { id } });
  }

  async remove(id: number) {
    return this.prisma.postre.delete({ where: { id } });
  }

  async update(id: number, updatePostreDto: UpdatePostreDto) {
    return this.prisma.postre.update({
      where: { id },
      data: updatePostreDto,
    });
  }
}
