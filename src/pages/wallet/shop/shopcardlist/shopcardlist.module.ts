import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopcardlistPage } from './shopcardlist';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    ShopcardlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopcardlistPage),
    ComponentsModule
  ],
})
export class ShopcardlistPageModule {}
