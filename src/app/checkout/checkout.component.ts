import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart/Services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  routeId :string =''
  constructor(private _cartService:CartService , private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this._activatedRoute.paramMap.subscribe((res:any) => {
    //   this.routeId = res.params.id
    //   console.log(this.routeId);
    // })
    this._activatedRoute.params.subscribe(params => {
      this.routeId =  params['id'];
      console.log(this.routeId);
    })
  }

  shippingAddress:FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null)
  })

  handleOnline() {
    console.log(this.shippingAddress.value);

    this._cartService.paymentOnline(this.routeId, this.shippingAddress.value).subscribe({
      next:(res) => {
        console.log(res);
        if(res.status == 'success') {
          console.log(res.session.url);

           /* //this Code Open In new tap
          window.open(res.session.url);*/

          // this code open in this tap
          window.location.href = res.session.url;
        }
      },
      error: (err) => console.log(err)
    })
  }
}
