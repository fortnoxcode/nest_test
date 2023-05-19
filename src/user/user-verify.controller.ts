import { Controller, Get, Param, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from './user.interface';

@Controller('verify')
export class UserVerifyController {
  constructor(@InjectModel('User') private userModel: Model<UserInterface>) {}

  @Get(':code')
  async verifyEmail(@Param('code') code: string, @Res() response) {
    try {
      const user = await this.userModel.findOne({
        emailVerificationCode: code,
      });
      if (!user) {
        return response.redirect('/verification/fail');
      }

      if (user.isEmailVerified) {
        return response.redirect('/verification/exist');
      }

      user.isEmailVerified = true;
      await user.updateOne({ isEmailVerified: true });

      return response.redirect('/verification/success');
    } catch (error) {
      return response.redirect('/verification/fail');
    }
  }
}
