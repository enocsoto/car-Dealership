import { IsString } from "class-validator";

export class CreateCarDto {

    @IsString({ message: `The Brand is Necesary` })
    readonly brand: string;
    @IsString()
    readonly model: string;

}