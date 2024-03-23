import { Component, OnInit } from '@angular/core';
import { Category } from '../core/interface/category';
import { ProductsService } from '../core/services/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  allCategories: Category [] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 8
      },

    },
    nav: true,
  }

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories() {
    this._productsService.getCategories().subscribe({
      next:(res) => {
        // console.log(res.data);
        this.allCategories = res.data
      }
    })
  }

}
