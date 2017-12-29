import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MallcardviewPage } from './mallcardview';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    MallcardviewPage,
  ],
  imports: [
    IonicPageModule.forChild(MallcardviewPage),
    ComponentsModule
  ],
})
export class MallcardviewPageModule {}
