import { Injectable } from '@nestjs/common';
import UserDto, { User, UserDto2 } from './user';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getUser() {
    const user: User = {
      id: 1,
      name: 'Luan',
      age: 22,
      pass: '123456',
    };
    return {
      user1: UserDto.plainToInstance<UserDto>(user),
      user2: UserDto2.plainToInstance<UserDto2>(user),
    };
  }
}
