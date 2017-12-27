import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromolistPage } from './promolist';

@NgModule({
  declarations: [
    PromolistPage,
  ],
  imports: [
    IonicPageModule.forChild(PromolistPage),
  ],
})
export class PromolistPageModule {}
