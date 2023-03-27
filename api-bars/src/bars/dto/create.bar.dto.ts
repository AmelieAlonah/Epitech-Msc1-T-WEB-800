import { IsInt, IsString } from 'class-validator';

export class CreateBarDto {
    @IsString()
    readonly name: string;
}