import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CouponlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    defaultHistory: ['CouponPage']
})
@Component({
  selector: 'page-couponlist',
  templateUrl: 'couponlist.html',
})
export class CouponlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo(page:string){
  	this.navCtrl.push(page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CouponlistPage');
  }

}
