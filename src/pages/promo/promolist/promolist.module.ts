import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromolistPage } from './promolist';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    PromolistPage,
  ],
  imports: [
    IonicPageModule.forChild(PromolistPage),
    ComponentsModule
  ],
})
export class PromolistPageModule {}
