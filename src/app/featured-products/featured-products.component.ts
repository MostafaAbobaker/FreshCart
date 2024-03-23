import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products.service';
import { Product } from '../core/interface/product';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {
  allProducts:Product[] = []
  constructor(private _productsService:ProductsService) { }
  inputSearch:string = ''
  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this._productsService.getProducts().subscribe({
      next:(res) => {
        // console.log(res);
        this.allProducts = res.data
      }
    })
  }
}
