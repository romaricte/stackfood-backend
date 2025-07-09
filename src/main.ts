import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './swagger.config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuration globale de validation des DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Supprime les propriétés non définies dans les DTOs
    forbidNonWhitelisted: false, // Interdit les propriétés non définies dans les DTOs
    transform: true, // Transforme automatiquement les données en types DTO
  }));

  // Configuration Swagger
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true, // Conserve l'en-tête d'autorisation entre les requêtes
    },
  });


  await app.listen(3008);
}
bootstrap();
