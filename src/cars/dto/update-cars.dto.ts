import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({ message: `The Brand is Necesary` })
    @IsOptional()
    readonly brand?: string;

    @IsOptional()
    @IsString()
    readonly model?: string;

}