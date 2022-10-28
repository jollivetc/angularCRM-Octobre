import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(!value) return value;
    if(typeof value === "string"){
      let phone = value as string;
      return phone.replace(/(.{2})/g, '$1 ').trim();
    }
    return value;
  }

}
