import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopcardlistPage } from './shopcardlist';

@NgModule({
  declarations: [
    ShopcardlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopcardlistPage),
  ],
})
export class ShopcardlistPageModule {}
