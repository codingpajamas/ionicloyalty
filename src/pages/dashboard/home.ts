import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public actionsheetCtrl: ActionSheetController) {
  }

  goTo(page:string){
  	this.navCtrl.push(page);
  }

  openCountryOptions(){
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Select a Country',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Indonesia',
          role: 'destructive',
          icon: 'flag-ind',
          handler: () => {
            console.log('Indonesai clicked');
          }
        },
        {
          text: 'Philippines',
          role: 'destructive',
          icon: 'flag-ph',
          handler: () => {
            console.log('Philippines clicked');
          }
        },
        {
          text: 'Singapore',
          role: 'destructive',
          icon: 'flag-sg',
          handler: () => {
            console.log('Singapore clicked');
          }
        },
        {
          text: 'Thailand',
          role: 'destructive',
          icon: 'flag-tha',
          handler: () => {
            console.log('Thailand clicked');
          }
        }  
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

}
