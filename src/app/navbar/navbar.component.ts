import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { CartService } from '../cart/Services/cart.service';
import { Cart } from '../cart/Interface/cart';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  language: boolean = false
  darkMode: boolean = false
  asideToggle: boolean = false
  isLoggedIn: boolean = false

  numberItem:number = 0

  @Output() showAsidebar:EventEmitter<boolean> = new EventEmitter ()

  constructor(private _authService:AuthService , private _cartService:CartService) {

  this._cartService.numOfCartItems.subscribe((res) => {
    this.numberItem = res
    console.log(this.numberItem );

  })

    // if(this._authService.userData != null) {
    //   this.isLoggedIn = true
    // } else {
    //   this.isLoggedIn = false
    // }

    this._authService.userData.subscribe((res) => {
      if(this._authService.userData.getValue() ) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    })
  }

  ngOnInit(): void {
  }


  ToggleAside() {
    this.asideToggle = !this.asideToggle;
    this.showAsidebar.emit(this.asideToggle);

  }
  logOut() {
    this._authService.logOut()
  }

}
