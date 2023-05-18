import { Controller, Get, Param } from '@nestjs/common';

@Controller('verify')
export class VerifyController {
  @Get(':code')
  getCode(@Param('code') code: string): string {
    return code;
  }
}
