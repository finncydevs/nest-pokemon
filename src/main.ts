import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Aktifkan validasi global
  app.useGlobalPipes(new ValidationPipe());

  // Aktifkan CORS agar frontend bisa mengakses backend
  app.enableCors({
    origin: '*', // Jika hanya frontend tertentu, ganti dengan URL frontend-mu
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Server is running on: http://localhost:${port}`);
}

bootstrap();
