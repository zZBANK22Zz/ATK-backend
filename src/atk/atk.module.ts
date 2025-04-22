import { Module } from '@nestjs/common';
import { AtkController } from './atk.controller';
import { AtkService } from './atk.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [AtkController],
  providers: [AtkService, PrismaService],
})
export class AtkModule {} 