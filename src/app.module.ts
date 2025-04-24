import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AtkModule } from './atk/atk.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
// Removed import for PrismaModule as it cannot be found

@Module({
  imports: [UsersModule, AtkModule, AuthModule], // Removed PrismaModule from imports
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
