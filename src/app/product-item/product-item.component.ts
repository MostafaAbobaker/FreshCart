import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../core/interface/product';
import { CartService } from '../cart/Services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  constructor(private _cartService:CartService) { }

  @Input() product: Product = {} as Product;
  ngOnInit(): void {
  }
  AddItem(id:string) {

    console.log(id)
    this._cartService.AddToCart(id).subscribe({
      next:(res) => {
        this._cartService.numOfCartItems.next(res.numOfCartItems)
      } ,
      error:(err) =>  console.log(err)

    });
  }
}
