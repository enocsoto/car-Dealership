/*Esta clase al no ser una dependencia puede ser usada o importada
sin problema BRAND ENTITY
*/
import { Brand } from "src/brands/entities/brand.entity";
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED : Brand[] = [
    {
        id: uuid(),
        name: 'Jeep',
        createdAt: new Date().getTime(),
        updatedAt: null
    },
    {
        id: uuid(),
        name: 'Honda',
        createdAt: new Date().getTime(),
        updatedAt: null
    },
    {
        id: uuid(),
        name: 'Toyota',
        createdAt: new Date().getTime(),
        updatedAt: null
    },
    {
        id: uuid(),
        name: 'Volvo',
        createdAt: new Date().getTime(),
        updatedAt: null
    },
    {
        id: uuid(),
        name: 'Tesla',
        createdAt: new Date().getTime(),
        updatedAt: null
    }
]