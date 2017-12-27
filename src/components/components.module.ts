import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MainFooterMenuComponent } from './main-footer-menu/main-footer-menu';
import { ButtonLinkComponent } from './button-link/button-link';
@NgModule({
	declarations: [MainFooterMenuComponent,
    ButtonLinkComponent],
	imports: [IonicModule],
	exports: [MainFooterMenuComponent,
    ButtonLinkComponent]
})
export class ComponentsModule {}
