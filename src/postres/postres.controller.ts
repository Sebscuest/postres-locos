// src/postres/postres.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostresService } from './postres.service';
import { CreatePostreDto } from './dto/create-postre.dto';
import { UpdatePostreDto } from './dto/update-postre.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('postres')
@Controller('postres')
export class PostresController {
  constructor(private readonly postresService: PostresService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo postre' })
  create(@Body() createPostreDto: CreatePostreDto) {
    return this.postresService.create(createPostreDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los postres' })
  findAll() {
    return this.postresService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un postre por ID' })
  findOne(@Param('id') id: string) {
    return this.postresService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un postre' })
  update(@Param('id') id: string, @Body() updatePostreDto: UpdatePostreDto) {
    return this.postresService.update(+id, updatePostreDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un postre' })
  remove(@Param('id') id: string) {
    return this.postresService.remove(+id);
  }
}
