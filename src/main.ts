import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Server } from 'http';
import serverlessExpress from '@vendia/serverless-express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  await app.init();
  const server: Server = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: server });
}

export const handler = bootstrap();
