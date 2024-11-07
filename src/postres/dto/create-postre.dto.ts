import { IsString, IsNumber } from 'class-validator';

export class CreatePostreDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  precio: number;

  @IsString() // Asegúrate de que este campo esté presente
  ingredientes: string; // Campo necesario
}
