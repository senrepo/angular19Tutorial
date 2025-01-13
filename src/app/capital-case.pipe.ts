import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalCase'
})
export class CapitalCasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toLowerCase().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }

}
