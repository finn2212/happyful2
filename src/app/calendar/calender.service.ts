import { Injectable } from '@angular/core';
import { Calitem } from '../models/calItem';
import { GoalsService } from '../goals/goals.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {
  calenderEvent;
  events: Array<Calitem> = [];

  constructor(private goalService: GoalsService,
    private localDb: Storage,) {

  }

  addEventToCalendar(calitem: Calitem) {
    console.log(calitem);
    this.events.push(calitem);
    this.storeEvents();
  }
  getAllEvents() {

    return this.events;
  }
  private storeEvents() {
    this.localDb.set('events', this.events);
  }

  async loadEventsAsync() {
    if (await this.localDb.get('events')) {
      this.events = await this.localDb.get('events');
      this.events.forEach(item => {
        if (item.startTime) {
          item.startTime = new Date(item.startTime);
        }
        else {
          item.startTime = new Date();
        }
        if (item.endTime) {
          item.endTime = new Date(item.endTime);
        }
        else {
          item.endTime = new Date();
        }


      });
    }

  }


  // createRandomEvents() {
  //   var events = [];
  //   for (var i = 0; i < 50; i += 1) {
  //     var date = new Date();
  //     var eventType = Math.floor(Math.random() * 2);
  //     var startDay = Math.floor(Math.random() * 90) - 45;
  //     var endDay = Math.floor(Math.random() * 2) + startDay;
  //     var startTime;
  //     var endTime;
  //     if (eventType === 0) {
  //       startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
  //       if (endDay === startDay) {
  //         endDay += 1;
  //       }
  //       endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
  //       events.push({
  //         title: 'All Day - ' + i,
  //         startTime: startTime,
  //         endTime: endTime,
  //         allDay: true
  //       });
  //     } else {
  //       var startMinute = Math.floor(Math.random() * 24 * 60);
  //       var endMinute = Math.floor(Math.random() * 180) + startMinute;
  //       startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
  //       endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
  //       events.push({
  //         title: 'Event - ' + i,
  //         startTime: startTime,
  //         endTime: endTime,
  //         allDay: false
  //       });
  //     }
  //   }

  // }
}
