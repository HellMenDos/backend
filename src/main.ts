import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import AdminBro from 'admin-bro';
import { Database, Resource } from 'admin-bro-typeorm';
import { setupAdminPanel } from './admin';

AdminBro.registerAdapter({ Database, Resource });


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const config = new DocumentBuilder()
  .setTitle('Notes API')
  .setDescription('The notes API description')
  .setVersion('1.0')
  .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await setupAdminPanel(app);
  await app.listen(3000);
}
bootstrap();
