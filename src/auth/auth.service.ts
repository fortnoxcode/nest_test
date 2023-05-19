import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthUserDto } from 'src/auth/auth.dto';
import { AuthInterface } from 'src/auth/auth.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private userModel: Model<AuthInterface>,
    private jwtService: JwtService,
  ) {}

  async signIn(authUserDto: AuthUserDto): Promise<{ access_token: string }> {
    const existingUser = await this.userModel
      .findOne({
        email: authUserDto.email,
      })
      .exec();
    if (existingUser?.password !== authUserDto.password) {
      throw new NotFoundException(`User not found`);
    }
    const payload = { email: existingUser.email, sub: existingUser._id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
