import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MainFooterMenuComponent } from './main-footer-menu/main-footer-menu';
import { ButtonLinkComponent } from './button-link/button-link';
import { WalletFooterMenuComponent } from './wallet-footer-menu/wallet-footer-menu';
@NgModule({
	declarations: [MainFooterMenuComponent,
    ButtonLinkComponent,
    WalletFooterMenuComponent],
	imports: [IonicModule],
	exports: [MainFooterMenuComponent,
    ButtonLinkComponent,
    WalletFooterMenuComponent]
})
export class ComponentsModule {}
