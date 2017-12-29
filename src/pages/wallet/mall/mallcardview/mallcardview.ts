import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MallcardviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  defaultHistory: ['MallcardPage']
})
@Component({
  selector: 'page-mallcardview',
  templateUrl: 'mallcardview.html',
})
export class MallcardviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo(page:string){
  	this.navCtrl.push(page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MallcardviewPage');
  }

}
