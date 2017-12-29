import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyredeemlistPage } from './myredeemlist';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    MyredeemlistPage,
  ],
  imports: [
    IonicPageModule.forChild(MyredeemlistPage),
    ComponentsModule
  ],
})
export class MyredeemlistPageModule {}
