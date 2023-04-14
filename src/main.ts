import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes( new ValidationPipe({
    whitelist: true, //limpia la data que se envia en el metodo
    forbidNonWhitelisted: true // si se manda data que no debe ser recibida devuelve un error 404
  }))
  await app.listen(3000);
}
bootstrap();
