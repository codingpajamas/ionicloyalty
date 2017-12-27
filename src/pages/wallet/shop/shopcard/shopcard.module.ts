import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopcardPage } from './shopcard';

@NgModule({
  declarations: [
    ShopcardPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopcardPage),
  ],
})
export class ShopcardPageModule {}
