import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseURL:string = 'https://ecommerce.routemisr.com/api/v1/'
  token:string | null ;

  numOfCartItems:BehaviorSubject<number>  = new BehaviorSubject(0)

  constructor(private _httpClient:HttpClient) {
    this.token = localStorage.getItem('userToken')

    this.getCart().subscribe({
      next: (res) => {
        this.numOfCartItems.next(res.numOfCartItems)
      }

    })

  }

  AddToCart(id:string):Observable<any> {
    return this._httpClient.post(`${this.baseURL}cart`,
    { productId: id},
/* // تم وضع التوكين فى ملف تانى    Http_Interceptor
    {
      headers : { token : `${this.token}`}
    } */
    )
  }

  getCart():Observable<any> {
    return this._httpClient.get(`${this.baseURL}cart`,
    /* {
      headers : { token : `${this.token}`}
    } */
    )
  }

  updateCart(id: string , count: number):Observable<any> {
    return this._httpClient.put(`${this.baseURL}cart/${id}`,
    {count: count},
    /* {
      headers : { token : `${this.token}`}
    } */
    )
  }

  removeProduct(id:string):Observable<any> {
    return this._httpClient.delete(`${this.baseURL}cart/${id}`,
    /* {
      headers : { token : `${this.token}`}
    } */
    )
  }

  ClearCart():Observable<any> {
    return this._httpClient.delete(`${this.baseURL}cart`,
    /* {
      headers : { token : `${this.token}`}
    } */
    )
  }
  paymentOnline(cartID:string, shoppingDetails:any):Observable<any> {
    return this._httpClient.post(`${this.baseURL}orders/checkout-session/${cartID}?url=http://localhost:3000`,
    { shippingAddress: shoppingDetails},
    /* {
      headers : { token : `${this.token}`}
    } */
    )
  }
}
