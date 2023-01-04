import { ClassConstructor, plainToInstance } from 'class-transformer';
const MapTo = function <T>(mapClass: ClassConstructor<T>) {
  return function (
    target: object,
    propertyName: string,
    descriptor: PropertyDescriptor,
  ) {
    const method: (...args) => any = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const methodBind = method.bind(this);
      return plainToInstance(mapClass, methodBind(...args), {
        excludeExtraneousValues: true,
      });
    };
  };
};

export default MapTo;
