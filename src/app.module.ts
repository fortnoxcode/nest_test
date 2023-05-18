import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './controllers/api.controller';
import { VerifyController } from './controllers/verify.controller';
import { UserSchema } from './schemas/user.schema';
import { UserService } from './service/user/user.service';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://admin:admin@localhost:27017/', {
      dbName: 'mainDB',
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [AppController, ApiController, VerifyController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
