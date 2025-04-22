import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAtkResultDto } from './dto/create-atk-result.dto';

@Injectable()
export class AtkService {
  constructor(private prisma: PrismaService) {}

  async create(createAtkResultDto: CreateAtkResultDto) {
    console.log("createAtkResultDto ",createAtkResultDto); // 👀 check values here
    return this.prisma.atkResult.create({
      data: {
        userId: createAtkResultDto.userId,
        result: createAtkResultDto.result,
        imageUrl: createAtkResultDto.imageUrl,
      },
    });
  }

  async findAll() {
    return this.prisma.atkResult.findMany();
  }

  async findOne(id: number) {
    return this.prisma.atkResult.findUnique({
      where: { id },
    });
  }

  async findByUserId(userId: number) {
    return this.prisma.atkResult.findMany({
      where: { userId },
    });
  }
} 