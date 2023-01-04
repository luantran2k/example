import { Expose } from 'class-transformer';
import BaseDto from './base.dto';

//Method 1 use Expose decorator & plainToInstance
export default class UserDto extends BaseDto {
  @Expose()
  name: string;
  @Expose()
  age: number;
}

export class UserDto2 {
  @Expose()
  id: number;
  @Expose()
  name: string;
}

export class User {
  id: number;
  name: string;
  age: number;
  pass: string;
}
