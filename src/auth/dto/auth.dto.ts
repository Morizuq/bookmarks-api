import { IsEmail, IsNotEmpty, IsString } from "class-validator"
/* Authentication Data Transfer Object*/
export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string
}

