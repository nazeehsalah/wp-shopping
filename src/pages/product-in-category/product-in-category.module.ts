import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductInCategoryPage } from './product-in-category';

@NgModule({
  declarations: [
    ProductInCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductInCategoryPage),
  ],
})
export class ProductInCategoryPageModule {}
