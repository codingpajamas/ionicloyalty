import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the MainFooterMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */ 
@Component({
  selector: 'main-footer-menu',
  templateUrl: 'main-footer-menu.html'
})
export class MainFooterMenuComponent {
 
  constructor(public navCtrl: NavController) {
    
  }

  navigateTo(page:string){
  	this.navCtrl.push(page);
  }

}
