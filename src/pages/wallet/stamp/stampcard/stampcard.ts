import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StampcardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stampcard',
  templateUrl: 'stampcard.html',
})
export class StampcardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo(page:string){
  	this.navCtrl.push(page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StampcardPage');
  }

}
