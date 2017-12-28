import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MalldirectoryPage } from './malldirectory';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    MalldirectoryPage,
  ],
  imports: [
    IonicPageModule.forChild(MalldirectoryPage),
    ComponentsModule
  ],
})
export class MalldirectoryPageModule {}
