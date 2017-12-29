import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopcardviewPage } from './shopcardview';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    ShopcardviewPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopcardviewPage),
    ComponentsModule
  ],
})
export class ShopcardviewPageModule {}
