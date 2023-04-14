/*Esta INTERFACE al no ser una dependencia puede ser usada o importada
sin problema CAR INTERFACE
*/
import { Car } from "src/cars/interfaces/cars.interfaces";
import { v4 as uuid } from 'uuid';

export const CARS_SEED : Car[] = [
    {
        id: uuid(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: uuid(),
        brand: 'Honda',
        model: 'Civic'
    },
    {
        id: uuid(),
        brand: 'Jeep',
        model: 'Cherokee'
    }
]