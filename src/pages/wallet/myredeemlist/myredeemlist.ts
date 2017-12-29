import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyredeemlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  defaultHistory: ['MallcardPage']
})
@Component({
  selector: 'page-myredeemlist',
  templateUrl: 'myredeemlist.html',
})
export class MyredeemlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyredeemlistPage');
  }

}
