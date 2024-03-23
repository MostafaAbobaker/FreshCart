import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../core/services/products.service';
import { Product } from '../core/interface/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from '../cart/Services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails :Product = {} as Product;
  productId:string = ''

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },

    },
    nav: true,
  }

  constructor(
    private _activatedRoute: ActivatedRoute ,
    private _productsService:ProductsService,
    private _cartService:CartService
    ) {

      this._activatedRoute.params.subscribe(params => {
        this.productId =  params['id'];
        console.log(this.productId);
      })

    /* this._activatedRoute.paramMap.subscribe((res:any) => {
      this.productId = res.params.id;

    }) */
    this._productsService.getProductDetails(this.productId).subscribe({
      next:(res) => {
        // console.log(res.data);
        this.productDetails = res.data;
      }
    });
  }

  ngOnInit(): void {
  }
  AddToCard(id:string) {
    this._cartService.AddToCart(id).subscribe({
      next:(res) => {
        this._cartService.numOfCartItems.next(res.numOfCartItems)
      },
      error:(err) => console.log(err)


    })
  }
}
