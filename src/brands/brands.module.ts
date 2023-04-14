import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  //se exporta el servicio para poder ser importado en el modulo que lo solicite
  exports: [BrandsService]
})
export class BrandsModule {}
