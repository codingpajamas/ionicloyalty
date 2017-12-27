import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopcardPage } from './shopcard';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    ShopcardPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopcardPage),
    ComponentsModule
  ],
})
export class ShopcardPageModule {}
