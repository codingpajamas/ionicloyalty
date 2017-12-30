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

  activeMenu: string;
  mallPages = ['MallcardPage', 'MallcardviewPage', 'MallcardlistPage'];
  shopPages = ['ShopcardPage', 'ShopcardlistPage', 'ShopcardviewPage'];
  couponPages = ['CouponPage', 'CouponlistPage', 'CouponviewPage'];
  stampPages = ['StampcardPage', 'StampviewPage', 'StamplistPage'];

  constructor(public navCtrl: NavController) {
    this.navCtrl.viewDidEnter.subscribe((view) => {
	    this.activeMenu = view.instance.constructor.name;

      console.log(view.instance.constructor.name)

      if(this.mallPages.indexOf(view.instance.constructor.name) != -1){
        this.activeMenu = 'mall';
      } 

      if(this.shopPages.indexOf(view.instance.constructor.name) != -1){
        this.activeMenu = 'shop';
      } 

      if(this.couponPages.indexOf(view.instance.constructor.name) != -1){
        this.activeMenu = 'coupon';
      } 

      if(this.stampPages.indexOf(view.instance.constructor.name) != -1){
        this.activeMenu = 'stamp';
      } 
	  });
  }

  navigateTo(page:string){
  	this.navCtrl.push(page);
  }

}
