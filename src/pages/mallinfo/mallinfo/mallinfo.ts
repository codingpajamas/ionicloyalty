import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MallinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
    defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-mallinfo',
  templateUrl: 'mallinfo.html',
})
export class MallinfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goTo(page:string){
  	this.navCtrl.push(page);
  }

  getItems(){
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MallinfoPage');
  }

}
