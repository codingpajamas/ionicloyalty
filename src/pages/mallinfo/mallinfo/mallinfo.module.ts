import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MallinfoPage } from './mallinfo';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    MallinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MallinfoPage),
    ComponentsModule
  ],
})
export class MallinfoPageModule {}
