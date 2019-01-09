import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';
/*
  Generated class for the WooCommerceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WooCommerceProvider {
  private url = "http://dirbrokers.net/index.php/wp-json/wp/v2/"
  /* Woo: any;
  Woo2: any; */
  constructor(public http: HttpClient) {
  }
  getWooCommerceData(url){
    return this.http.get(this.url+url)
  } 
}
 /*  this.Woo = WC({
      url: "http://dirbrokers.net/api",
      consumerKey: "ck_3f769db9695333e292aff91f8453f4b8eb82e096",
      consumerSecret: "cs_4923aace5bba06124375c0cd70a7e2bfe18cbde5"
    });

     this.Woo2 = WC({
       url: "http://dirbrokers.net",
       consumerKey: "ck_3f769db9695333e292aff91f8453f4b8eb82e096",
       consumerSecret: "cs_4923aace5bba06124375c0cd70a7e2bfe18cbde5",
       wpAPI: true,
       version: "wc/v2"
     }); */
/* init(v2?: boolean) {
    if (v2 == true) {
      return this.Woo2;
    } else {
      return this.Woo;
    }
  }

 */