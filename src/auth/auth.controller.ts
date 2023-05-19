import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  NotFoundException,
  UnauthorizedException,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDto } from 'src/auth/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() authUserDto: AuthUserDto) {
    try {
      const res = await this.authService.signIn(authUserDto);
      return res;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
