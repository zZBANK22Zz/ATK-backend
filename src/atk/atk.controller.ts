import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFile, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AtkService } from './atk.service';
import { CreateAtkResultDto } from './dto/create-atk-result.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { SessionGuard } from 'src/auth/session.guard';

@Controller('atk')
export class AtkController {
  constructor(private readonly atkService: AtkService) {}

  @Post()
  @UseGuards(SessionGuard)
  @UsePipes(new ValidationPipe({ transform: true }))
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createAtkResultDto: CreateAtkResultDto,
  ) {
    const imageUrl = `/uploads/${file.filename}`;
    return this.atkService.create({
      ...createAtkResultDto,
      imageUrl,
    });
  }

  @Get()
  findAll() {
    return this.atkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atkService.findOne(+id);
  }

  @Get('user/:userId')
  findByUserId(@Param('userId') userId: string) {
    return this.atkService.findByUserId(+userId);
  }
} 