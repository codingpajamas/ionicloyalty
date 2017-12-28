import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StamplistPage } from './stamplist';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    StamplistPage,
  ],
  imports: [
    IonicPageModule.forChild(StamplistPage),
    ComponentsModule
  ],
})
export class StamplistPageModule {}
