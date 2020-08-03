import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { CaladarPageRoutingModule } from './caladar-routing.module'
import { CaladarPage } from './caladar.page';

import { CalModalPageModule } from '../cal-modal/cal-modal.module'
import { NgCalendarModule } from 'ionic2-calendar'
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaladarPageRoutingModule,
    NgCalendarModule,
    CalModalPageModule
  ],
  declarations: [CaladarPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' }
  ]
})
export class CaladarPageModule { }
