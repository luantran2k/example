import { Injectable } from '@nestjs/common';
import UserDto, { User } from './user';

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
    return UserDto.plainToInstance<UserDto>(user);
  }

  getUser2() {
    const user: User = {
      id: 1,
      name: 'Luan',
      age: 22,
      pass: '123456',
    };
    return user;
  }
}
