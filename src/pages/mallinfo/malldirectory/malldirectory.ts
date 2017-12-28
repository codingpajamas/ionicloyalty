import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MalldirectoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    defaultHistory: ['MallinfoPage']
})
@Component({
  selector: 'page-malldirectory',
  templateUrl: 'malldirectory.html',
})
export class MalldirectoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo(page:string){
  	this.navCtrl.push(page);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MalldirectoryPage');
  }

}
