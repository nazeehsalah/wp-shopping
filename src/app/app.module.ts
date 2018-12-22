import { CheckoutPage } from './../pages/checkout/checkout';
import { SearchPage } from './../pages/search/search';
import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from './../pages/login/login';
import { ProductInCategoryPage } from './../pages/product-in-category/product-in-category';
import { ProductIndetailsPage } from './../pages/product-indetails/product-indetails';
import { CartPage } from './../pages/cart/cart';
import { MenuPage } from './../pages/menu/menu';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WooCommerceProvider } from '../providers/woo-commerce/woo-commerce';
import { IonicStorageModule } from '@ionic/storage';
import {OneSignal} from "@ionic-native/onesignal"


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    CartPage,
    ProductIndetailsPage,
    ProductInCategoryPage,
    LoginPage,
    SignupPage,
    SearchPage,
    CheckoutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    CartPage,
    ProductIndetailsPage,
    ProductInCategoryPage,
    LoginPage,
    SignupPage,
    SearchPage,
    CheckoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    WooCommerceProvider,
    OneSignal
  ]
})
export class AppModule { }
