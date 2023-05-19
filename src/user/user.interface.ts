import { Document } from 'mongoose';

export interface UserInterface extends Document {
  readonly email: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly patronymic: string;
  readonly age: string;
  isEmailVerified: boolean;
  emailVerificationCode: string;
}
