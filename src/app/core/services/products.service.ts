import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _httpClient:HttpClient) { }

  getCategories():Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/categories')
  }

  getProducts():Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  getProductDetails(id:string):Observable<any> {
    return this._httpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
}
