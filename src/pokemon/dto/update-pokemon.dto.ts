import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';
import { IsInt, IsOptional, IsString, Min, MinLength } from 'class-validator';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {
    @IsOptional()
    @IsInt()
    @Min(1)
    no: number;

    @IsOptional()
    @IsString()
    @MinLength(1)
    name: string;
}
