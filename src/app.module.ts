import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AtkModule } from './atk/atk.module';
// Removed import for PrismaModule as it cannot be found

@Module({
  imports: [UsersModule, AtkModule], // Removed PrismaModule from imports
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
