import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import MapTo from './mapTo.decorator';
import UserDto, { UserDto2 } from './user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Method 1 use baseDto to map output
  @Get('user1')
  getUser() {
    return this.appService.getUser();
  }

  //Method 2 use custom decorator to mapOutput
  @Get('user2')
  @MapTo(UserDto2)
  getUser2() {
    return this.appService.getUser2();
  }
}
