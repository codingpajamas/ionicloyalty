import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MalleventPage } from './mallevent';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    MalleventPage,
  ],
  imports: [
    IonicPageModule.forChild(MalleventPage),
    ComponentsModule
  ],
})
export class MalleventPageModule {}
