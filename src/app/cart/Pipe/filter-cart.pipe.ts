import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCart'
})
export class FilterCartPipe implements PipeTransform {

  transform(value: any[]): any[] {
    return value.filter((product) => product.count != 0);
  }

}
