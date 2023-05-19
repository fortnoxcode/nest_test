import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  patronymic: string;

  @IsNotEmpty()
  age: number;

  @IsNotEmpty()
  @IsBoolean()
  isEmailVerified: boolean;

  @IsString()
  emailVerificationCode: string;
}
