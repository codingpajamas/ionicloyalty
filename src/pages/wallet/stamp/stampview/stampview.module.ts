import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StampviewPage } from './stampview';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    StampviewPage,
  ],
  imports: [
    IonicPageModule.forChild(StampviewPage),
    ComponentsModule
  ],
})
export class StampviewPageModule {}
