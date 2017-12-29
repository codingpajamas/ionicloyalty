import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShopcardviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  defaultHistory: ['ShopcardPage']
})
@Component({
  selector: 'page-shopcardview',
  templateUrl: 'shopcardview.html',
})
export class ShopcardviewPage {

  carddetailtype:string = 'redeemables';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo(page:string){
  	this.navCtrl.push(page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopcardviewPage');
  }

}
