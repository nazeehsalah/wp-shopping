import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductIndetailsPage } from './product-indetails';

@NgModule({
  declarations: [
    ProductIndetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductIndetailsPage),
  ],
})
export class ProductIndetailsPageModule {}
