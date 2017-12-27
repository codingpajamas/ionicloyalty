import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StampcardPage } from './stampcard';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    StampcardPage,
  ],
  imports: [
    IonicPageModule.forChild(StampcardPage),
    ComponentsModule
  ],
})
export class StampcardPageModule {}
