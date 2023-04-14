import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
/*este servicio se permite importar gracias a que es expuesto en el modulo de 
carService y BrandsService en la funcion export */
import { CarsService } from '../cars/cars.service';
import { BrandsService } from 'src/brands/brands.service';


@Injectable()
export class SeedService {
  
constructor(
  //inyeccion de la dependencia del servicio CarService
  private readonly carservice: CarsService,
  private readonly brandService: BrandsService,
){}

  populateDB(){

    //CARS_SEED
    //BRANDS_SEED
    /*Se llama a la funcion creada en el carService que permite traer todos los datos de la INTERFACE
    CAR */
    this.carservice.fillCarsWithSeedData(CARS_SEED);
    this.brandService.fillBrandsWithSeedData(BRANDS_SEED);

    return `BRANDS_SEED AND CARS_SEED EXECUTED`
  }

}
