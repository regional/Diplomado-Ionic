import { NgModule } from '@angular/core';




import { IonicPageModule } from 'ionic-angular';

import { NewsdetailPage } from './newsdetail.page';






@NgModule({
  declarations: [
    NewsdetailPage,
   
  ],
  imports: [

    IonicPageModule.forChild(NewsdetailPage),
  ],
})
export class NewsdetailPageModule {}


