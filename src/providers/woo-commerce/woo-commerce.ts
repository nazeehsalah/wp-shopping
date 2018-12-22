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

  Woo: any;
  Woo2: any;
  constructor(public http: HttpClient) {
    this.Woo = WC({
      url: "http://52.66.171.54",
      consumerKey: "ck_2ec7be12c0191a8a222cb85e89eea6291e0746e1",
      consumerSecret: "cs_a300ce55d107c61910208ae1d37f4c4978561b87"
    });

    this.Woo2 = WC({
      url: "http://52.66.171.54",
      consumerKey: "ck_2ec7be12c0191a8a222cb85e89eea6291e0746e1",
      consumerSecret: "cs_a300ce55d107c61910208ae1d37f4c4978561b87",
      wpAPI: true,
      version: "wc/v2"
    });
  }
  init(v2?: boolean) {
    if (v2 == true) {
      return this.Woo2;
    } else {
      return this.Woo;
    }
  }


}
