import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllOrderListPage } from './all-order-list';

@NgModule({
  declarations: [
    AllOrderListPage,
  ],
  imports: [
    IonicPageModule.forChild(AllOrderListPage),
  ],
})
export class AllOrderListPageModule {}
