import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WooCommerceProvider } from '../../providers/woo-commerce/woo-commerce';

/**
 * Generated class for the ProductInCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-in-category',
  templateUrl: 'product-in-category.html',
})
export class ProductInCategoryPage {


  woo: any;
  products: any[];
  page: number;
  category: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private WP: WooCommerceProvider
  ) {
    this.page = 1;
    this.category = this.navParams.get("category");
    /* this.woo = WP.init(); */
    this.woo.getAsync("products?filter[category]=" + this.category.slug).then((data) => {
      console.log(JSON.parse(data.body));
      this.products = JSON.parse(data.body).products;
    }, (err) => {
      console.log(err)
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsByCategory');
  }
  loadMoreProducts(event) {
    this.page++;
    console.log("Getting page " + this.page);
    this.woo.getAsync("products?filter[category]=" + this.category.slug + "&page=" + this.page).then((data) => {
      let temp = (JSON.parse(data.body).products);
      this.products = this.products.concat(JSON.parse(data.body).products)
      console.log(this.products);
      event.complete();
      if (temp.length < 10)
        event.enable(false);
    })
  }
  openProductPage(product) {
    this.navCtrl.push('ProductDetails', { "product": product });
  }
}