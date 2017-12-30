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

  activeMenu = '';
  promoPages = ['PromoPage', 'PromoviewPage', 'PromolistPage'];
  mallInfoPages = ['MallinfoPage', 'MalleventPage', 'MalldirectoryPage'];
  notifPages = ['NotificationPage'];
 
  constructor(public navCtrl: NavController) {
    this.navCtrl.viewDidEnter.subscribe((view) => {
	    console.log(view.instance.constructor.name)

      if(this.promoPages.indexOf(view.instance.constructor.name) != -1){
        this.activeMenu = 'promo';
      } 

      if(this.mallInfoPages.indexOf(view.instance.constructor.name) != -1){
        this.activeMenu = 'mallinfo';
      } 

      if(this.notifPages.indexOf(view.instance.constructor.name) != -1){
        this.activeMenu = 'notification';
      }  
	  });
  } 

  navigateTo(page:string){
  	this.navCtrl.push(page);
  }

}
