import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MallcardPage } from './mallcard';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    MallcardPage,
  ],
  imports: [
    IonicPageModule.forChild(MallcardPage),
    ComponentsModule
  ],
})
export class MallcardPageModule {}
