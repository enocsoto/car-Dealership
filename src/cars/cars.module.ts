import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  //Se expone el servicio de CarService para asi poder ser usado por otros modulos
  exports: [CarsService]
})
export class CarsModule {}
