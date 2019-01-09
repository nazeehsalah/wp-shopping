import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Slides, ToastController } from 'ionic-angular';
import { WooCommerceProvider } from '../../providers/woo-commerce/woo-commerce';
import * as wc from "woocommerce-api"
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('productSlides') productSlides: Slides;
  wooCom: any;
  products: any[];
  moreProducts: any[];
  page: number;
  searchQuery: string = "";

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private WP: WooCommerceProvider
  ) {
    this.page = 2
    var WooCommerce = new wc({
      url: 'http://newone.dirbrokers.net/',
      consumerKey: "ck_f9a64714be33765e044b70936cce361d8554e06b",
      consumerSecret: "cs_97cf7877b17163117916025cd735a385a944918d",
      wpAPI: true,
      version: 'wc/v2'
    });
    WooCommerce.getAsync('products').then(function(result) {
      console.log(result);
    });
    /* this.wooCom = this.WP.init() */
    /* this.more(null) */
    this.WP.getWooCommerceData("product")
      .subscribe((data: any) => {
        console.log(data)
        /* this.products = JSON.parse(data.body).products; */
      }, ((err) => {
        console.log(err)
      }))
  }
  /*  more(event) {
     if (event == null) {
       this.page = 2;
       this.moreProducts = [];
     }
     else
       this.page++;
     this.wooCom.getWooCommerceData("products?page=" + this.page).then((data) => {
       console.log(JSON.parse(data.body));
       this.moreProducts = this.moreProducts.concat(JSON.parse(data.body).products);
       if (event != null)
         event.complete();
       if (JSON.parse(data.body).products.length < 10) {
         event.enable(false);
         this.toastCtrl.create({
           message: "No more products!",
           duration: 5000
         }).present();
       }
     }, (err) => {
       console.log(err)
     })
   }
   productDetails(product) {
     this.navCtrl.push('ProductDetails', { "product": product });
   }
   search(event) {
     if (this.searchQuery.length > 0) {
       this.navCtrl.push('SearchPage', { "searchQuery": this.searchQuery });
     }
   } */
}
