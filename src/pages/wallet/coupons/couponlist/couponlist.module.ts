import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouponlistPage } from './couponlist';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    CouponlistPage,
  ],
  imports: [
    IonicPageModule.forChild(CouponlistPage),
    ComponentsModule
  ],
})
export class CouponlistPageModule {}
