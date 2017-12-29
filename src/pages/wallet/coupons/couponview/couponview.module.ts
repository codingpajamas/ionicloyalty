import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CouponviewPage } from './couponview';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  declarations: [
    CouponviewPage,
  ],
  imports: [
    IonicPageModule.forChild(CouponviewPage),
    ComponentsModule
  ],
})
export class CouponviewPageModule {}
