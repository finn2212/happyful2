import { Component, AfterViewInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { CalenderService } from '../calender.service';

@Component({
  selector: 'app-calendar-detail',
  templateUrl: './calendar-detail.page.html',
  styleUrls: ['./calendar-detail.page.scss'],
})
export class CalendarDetailPage implements AfterViewInit {

  constructor(private modalCtrl: ModalController, private calService: CalenderService) { }
  modalReady = false;
  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };

  ngAfterViewInit() {
    setTimeout(() => {
      this.modalReady = true;
    }, 0);
    this.event = this.calService.calenderEvent;
    console.log(this.event);
  }
  close() {
    this.modalCtrl.dismiss();
  }
  save() {
    this.modalCtrl.dismiss({ event: this.event })
  }

}
