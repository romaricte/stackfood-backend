import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('API StateFood')
  .setDescription('Swagger API description')
  .setContact('StateFood', 'https://statefood.com', 'contact@statefood.com')
  .setVersion('1.0')
  .addBearerAuth() // pour le token JWT
  .build();
