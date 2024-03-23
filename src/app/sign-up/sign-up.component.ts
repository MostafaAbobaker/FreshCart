import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  errApi: string = '';
  isLoading:boolean = false;
  constructor(private _authService:AuthService , private _router:Router) { }

  ngOnInit(): void {
  }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.maxLength(13) , Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    rePassword: new FormControl('',[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    phone: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(13)]),
  })




  register(form: FormGroup) {
    console.log(form.value);
    if(form.valid) {
      this.isLoading = true
      this._authService.register(form.value).subscribe({
        next:(data) => {
          // console.log(data)
          this.isLoading = false;
          this._router.navigate(['/login'])

        },
        error:(err) => {
          this.errApi = err.error.errors.msg;
          this.errApi = err.errors.msg;
        },

      })
    }
  }
}
