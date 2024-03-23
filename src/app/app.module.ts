import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { ConcatPipe } from './core/Pipes/concat.pipe';
import { SearchPipe } from './core/Pipes/search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { AllordersComponent } from './allorders/allorders.component';
import { HttpInterceptorInterceptor } from './http_interceptor.interceptor';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AsidebarComponent,
    SignUpComponent,
    LogInComponent,
    FeaturedProductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    CategoriesComponent,
    MainSliderComponent,
    ConcatPipe,
    SearchPipe,
    CheckoutComponent,
    AllordersComponent,
    LoaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule ,
    RouterModule,
    FormsModule

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS ,
    useClass: HttpInterceptorInterceptor,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
