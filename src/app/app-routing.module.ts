import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllordersComponent } from './allorders/allorders.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',canActivate:[AuthGuard], component: HomeComponent},
  {path:'productDetails/:id',canActivate:[AuthGuard], component: ProductDetailsComponent},
  {path:'signUp', component: SignUpComponent},
  {path:'login', component: LogInComponent},
  {path:'checkout/:id', component: CheckoutComponent},
  {path:'allorders', component: AllordersComponent},
  {path:'setting', loadChildren:() => import ('./setting/setting.module').then((m) => m.SettingModule)},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
