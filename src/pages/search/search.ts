import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WooCommerceProvider } from '../../providers/woo-commerce/woo-commerce';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchQuery: string = "";
  WooCommerce: any;
  products: any[] = [];
  page: number = 2;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
     public toastCtrl: ToastController, 
     private WP: WooCommerceProvider) {
    console.log(this.navParams.get("searchQuery"));
    this.searchQuery = this.navParams.get("searchQuery");
    this.WooCommerce = WP.init();
    this.WooCommerce.getAsync("products?filter[q]=" + this.searchQuery).then((searchData) => {
      this.products = JSON.parse(searchData.body).products;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  loadMoreProducts(event) {
    this.WooCommerce.getAsync("products?filter[q]=" + this.searchQuery + "&page=" + this.page).then((searchData) => {
      this.products = this.products.concat(JSON.parse(searchData.body).products);
      if (JSON.parse(searchData.body).products.length < 10) {
        event.enable(false);
        this.toastCtrl.create({
          message: "No more products!",
          duration: 5000
        }).present();
      }
      event.complete();
      this.page++;
    });
  }
}