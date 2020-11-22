import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { LandingComponent } from '../main/landing/landing.component';
import { AboutComponent } from '../main/about/about.component';
import { ProductComponent } from '../main/product/product.component';
import { CartComponent } from '../main/cart/cart.component';
import { ProductViewComponent } from '../main/product-view/product-view.component';
import {  CheckoutComponent } from '../main/checkout/checkout.component';
import { OrderComponent } from '../main/order/order.component';
import { OrderSuccessComponent } from '../main/order-success/order-success.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: 'about', component: AboutComponent },
      { path: 'product', component: ProductComponent },
      { path: 'cart', component: CartComponent },
      { path: 'product/:slug', component: ProductViewComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'order', component: OrderComponent },
      { path: 'order-sucess', component: OrderSuccessComponent },

    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
