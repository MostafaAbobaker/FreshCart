import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interface/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Products: Product[], trim:string): Product[] {
    return Products.filter((product) => product.title.toLowerCase().includes(trim.toLowerCase()));
  }

}
