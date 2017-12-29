import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromoviewPage } from './promoview';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    PromoviewPage,
  ],
  imports: [
    IonicPageModule.forChild(PromoviewPage),
    ComponentsModule
  ],
})
export class PromoviewPageModule {}
