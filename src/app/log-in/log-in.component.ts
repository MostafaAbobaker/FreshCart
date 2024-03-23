import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  errApi: string = '';
  isLoading:boolean = false;
  constructor(private _authService:AuthService , private _router:Router) { }

  ngOnInit(): void {
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required , Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
  })




  login(form: FormGroup) {
    console.log(form.value);
    if(form.valid) {
      this.isLoading = true
      this._authService.login(form.value).subscribe({
        next:(data) => {
          // console.log(data)
          this.isLoading = false;
          localStorage.setItem("userToken",data.token)
          this._authService.getUserData()
          this._router.navigate(['/home'])

        },
        error:(err) => {
          this.errApi = err.error.errors.msg;
          // this.errApi = err.errors.message;
          // console.log(err);
        },

      })
    }
  }

}
