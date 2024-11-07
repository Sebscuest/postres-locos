import { Module } from '@nestjs/common';
import { PostresService } from './postres.service';
import { PostresController } from './postres.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PostresController],
  providers: [PostresService, PrismaService],
})
export class PostresModule {}
