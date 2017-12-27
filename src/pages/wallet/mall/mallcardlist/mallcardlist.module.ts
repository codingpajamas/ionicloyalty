import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MallcardlistPage } from './mallcardlist';

@NgModule({
  declarations: [
    MallcardlistPage,
  ],
  imports: [
    IonicPageModule.forChild(MallcardlistPage),
  ],
})
export class MallcardlistPageModule {}
