import { PartialType } from '@nestjs/swagger';
import { CreatePostreDto } from './create-postre.dto';

export class UpdatePostreDto extends PartialType(CreatePostreDto) {}
