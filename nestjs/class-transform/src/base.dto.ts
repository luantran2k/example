import { plainToInstance } from 'class-transformer';

export default abstract class BaseDto {
  static plainToInstance<T>(this: new (...args: any[]) => T, obj: T): T {
    return plainToInstance(this, obj, { excludeExtraneousValues: true });
  }
}
