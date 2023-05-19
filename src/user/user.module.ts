import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserVerifyController } from './user-verify.controller';
import { UserService } from './user.service';
import { UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.mongoDB, {
      dbName: process.env.dbName,
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  providers: [UserService],
  controllers: [UserController, UserVerifyController],
  exports: [UserService],
})
export class UserModule {}
