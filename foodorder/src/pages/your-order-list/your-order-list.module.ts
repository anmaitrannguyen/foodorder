import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourOrderListPage } from './your-order-list';

@NgModule({
  declarations: [
    YourOrderListPage,
  ],
  imports: [
    IonicPageModule.forChild(YourOrderListPage),
  ],
})
export class YourOrderListPageModule {}
