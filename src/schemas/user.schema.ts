import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class User {
  @Prop()
  email: string;
  @Prop()
  password: string;
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  patronymic: string;
  @Prop()
  age: number;
}
export const UserSchema = SchemaFactory.createForClass(User);
