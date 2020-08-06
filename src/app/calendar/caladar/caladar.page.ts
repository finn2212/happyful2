import { Component, OnInit, ViewChild, } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { AlertController, ModalController } from '@ionic/angular';
import { CalenderService } from '../calender.service';

import { CalModalPage } from '../cal-modal/cal-modal.page';
import { CalendarDetailPage } from '../calendar-detail/calendar-detail.page';
import { Calitem } from 'src/app/models/calItem';
@Component({
  selector: 'app-caladar',
  templateUrl: './caladar.page.html',
  styleUrls: ['./caladar.page.scss'],
})
export class CaladarPage implements OnInit {
  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private modalCtrl: ModalController, private calService: CalenderService) { }

  ngOnInit() {
    this.getEntries();
  }
  getEntries() {
    this.eventSource = this.calService.getAllEvents();
  }
  ionViewWillEnter() {
    this.eventSource = this.calService.getAllEvents();
  }

  next() {
    this.myCal.slideNext();
  }
  back() {
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  removeEvents() {
    this.eventSource = [];
  }


  async openCalModal() {
    const modal = await this.modalCtrl.create({
      component: CalModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });

    await modal.present();

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.event) {
        let event = result.data.event;
        if (event.allDay) {
          let start = event.startTime;
          event.startTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate()
            )
          );
          event.endTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate() + 1
            )
          );
        }
        this.eventSource.push(result.data.event);
        this.myCal.loadEvents();
      }
    });
  }
  async onEventSelected(event) {
    this.calService.calenderEvent = event;
    const modal = await this.modalCtrl.create({
      component: CalendarDetailPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });
    await modal.present();
  }


}
