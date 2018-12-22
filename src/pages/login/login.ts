import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Events, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    public toastCtrl: ToastController,
    public storage: Storage,
    public alertCtrl: AlertController,
    public events: Events
  ) {
    this.username = "";
    this.password = "";
  }
  login() {
    this.http.get("http://samarth.southeastasia.cloudapp.azure.com/api/auth/generate_auth_cookie/?insecure=cool&username=" + this.username + "&password=" + this.password)
      .subscribe((res) => {
        console.log(res.json());
        let response = res.json();
        if (response.error) {
          this.toastCtrl.create({
            message: response.error,
            duration: 5000
          }).present();
          return;
        }
        this.storage.set("userLoginInfo", response).then((data) => {
          this.alertCtrl.create({
            title: "Login Successful",
            message: "You have been logged in successfully.",
            buttons: [{
              text: "OK",
              handler: () => {
                this.events.publish("updateMenu");
                if (this.navParams.get("next")) {
                  this.navCtrl.push(this.navParams.get("next"));
                } else {
                  this.navCtrl.pop();
                }
              }
            }]
          }).present();
        })
      });
  }
}