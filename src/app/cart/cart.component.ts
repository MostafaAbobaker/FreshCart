import { Component, OnInit } from '@angular/core';
import { CartService } from './Services/cart.service';
import { Cart } from './Interface/cart';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartDetails : Cart = {} as Cart;

  constructor(private _cartService:CartService , private _router:Router) { }

  ngOnInit(): void {

    this.getCart()
  }
  getCart() {
    // console.log('getCart');

    this._cartService.getCart().subscribe({
      next:(res) => {
        this.cartDetails = res
      },
      error:(err) => console.log(err)


    })
  }

  updateCart(id:string , count:number) {
    this._cartService.updateCart(id,count).subscribe({
      next:(res)=> {
        this.cartDetails = res
      },
      error:(err) => console.log(err)
    })
  }

  removeProduct(id:string) {
    this._cartService.removeProduct(id).subscribe({
      next: (res) => {
        this.cartDetails = res
        console.log(res)
      },
      error: (err) => console.log(err),


    })
  }

  ClearCart () {
    debugger
    this._cartService.ClearCart().subscribe({
      next: (res) => {
        console.log(res)
        this._cartService.numOfCartItems.next(0)
        this._router.navigate(['/home'])
      },
      error: (err) => console.log(err)


    });
  }
}




