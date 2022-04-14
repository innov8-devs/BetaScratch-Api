import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import cors from 'cors';
import { NestExpressApplication } from '@nestjs/platform-express';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService)
  app.use(cors({credentials: true, origin: "http://localhost:3000"}))
  // app.enableCors({ maxAge: configService.get('maxAge') });

  app.enableCors({
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,DELETE",
    allowedHeaders: "Content-Type, Accept",
    credentials: true,
  });

  app.set("trust proxy", 1);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const PORT = configService.get('port');
  await app.listen(PORT || 4000);
}
bootstrap();
