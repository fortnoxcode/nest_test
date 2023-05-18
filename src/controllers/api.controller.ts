import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get(':user')
  getUser(@Param('user') user: string): string {
    return user;
  }
  @Post(':user')
  postUser(@Param('user') user: string): string {
    return user;
  }
  @Put(':user')
  puttUser(@Param('user') user: string): string {
    return user;
  }
  @Patch(':user')
  patchUser(@Param('user') user: string): string {
    return user;
  }
  @Delete(':user')
  deleteUser(@Param('user') user: string): string {
    return user;
  }
}
