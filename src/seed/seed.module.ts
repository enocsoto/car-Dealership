import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
//se importan CarsModule y BrandsModule para poder utilizar sus sercivios expuestos en sus modulos
import { CarsModule } from 'src/cars/cars.module';
import { BrandsModule } from 'src/brands/brands.module';

@Module({
  //Se importa el modulo de Car para poder utilizar los servicios expuestos en ese modulo
  //al colocar el CarsModule se devuelve un singleton del servicio es decir
  //una misma instancia de la clase con sus valores por defecto
  imports: [CarsModule, BrandsModule],
  controllers: [SeedController],
  providers: [SeedService]
})
export class SeedModule {}
