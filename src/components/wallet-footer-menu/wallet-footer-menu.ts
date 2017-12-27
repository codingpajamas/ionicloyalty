import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the WalletFooterMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'wallet-footer-menu',
  templateUrl: 'wallet-footer-menu.html'
})
export class WalletFooterMenuComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    
  }

  navigateTo(page:string){
  	this.navCtrl.push(page);
  }

}
