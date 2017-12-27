import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromoPage } from './promo';  
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    PromoPage, 
  ],
  imports: [ 
    IonicPageModule.forChild(PromoPage),
    ComponentsModule
  ],
})
export class PromoPageModule {}
