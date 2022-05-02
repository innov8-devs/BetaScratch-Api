import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NextFunction, Request, Response } from 'express';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  app.set('trust proxy', 1);

  const origin = [ 'http://localhost:3000']

const corsOptions = {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
      'Authorization',
      'Access-Control-Allow-Origin',
      'Access-Control-Allow-Headers'
    ],
    credentials: true,
    methods: ['GET', 'HEAD', 'PUT', 'POST', 'PATCH', 'DELETE'],
    origin,
    preflightContinue: false,
  };

  app.enableCors(corsOptions)

  app.use((req: Request, res: Response, next: NextFunction)=> {
    if(origin.includes(req.headers.origin)){
      res.header('Access-Control-Allow-Origin', req.headers.origin)
    }
    next()
  })

  // app.enableCors({
  //   origin: [
  //     'https://betascratch.herokuapp.com',
  //     'http://localhost:3000',
  //     'http://127.0.0.1:3000',
  //     'https://beta-admin.vercel.app',
  //     'https://betascratch.com',
  //     'https://www.betascratch.com',
  //   ],
  //   methods: ['GET', 'HEAD', 'PUT', 'POST', 'PATCH', 'DELETE'],

  //   allowedHeaders:
  //   'Content-Type,Accept,Authorization,Access-Control-Allow-Origin',
  //   credentials: true,
  //   // preflightContinue: true,
  // });

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
