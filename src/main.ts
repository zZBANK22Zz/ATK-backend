import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(
    session({
      secret: 'asdfasdfasdf',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 60000
      }
    }),
  );
  // Serve static files from /uploads
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/', // 👈 important!
  });
  app.enableCors();
  await app.listen(8000);
}
bootstrap();
