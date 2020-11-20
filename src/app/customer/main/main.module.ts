import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ProductViewComponent } from './product-view/product-view.component';


@NgModule({
  declarations: [MainComponent, LandingComponent, AboutComponent, ProductComponent, CartComponent, ProductViewComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
