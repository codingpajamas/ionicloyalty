import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MallcardlistPage } from './mallcardlist';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    MallcardlistPage,
  ],
  imports: [
    IonicPageModule.forChild(MallcardlistPage),
    ComponentsModule
  ],
})
export class MallcardlistPageModule {}
