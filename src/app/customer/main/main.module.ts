import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductCategoryComponent } from './product/product-category/product-category.component';


@NgModule({
  declarations: [MainComponent, LandingComponent, AboutComponent, ProductComponent, CartComponent, ProductViewComponent, CheckoutComponent, OrderComponent, OrderSuccessComponent, ProductCategoryComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
