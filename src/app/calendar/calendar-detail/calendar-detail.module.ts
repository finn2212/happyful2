import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarDetailPageRoutingModule } from './calendar-detail-routing.module';

import { CalendarDetailPage } from './calendar-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarDetailPageRoutingModule
  ],
  declarations: [CalendarDetailPage]
})
export class CalendarDetailPageModule {}
