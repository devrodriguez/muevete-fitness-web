import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './sale/products.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NavbarModule
  ]
})
export class ProductsModule { }
