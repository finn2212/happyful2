import { Injectable } from '@angular/core';
import { Calitem } from '../models/calItem';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {
  calenderEvent;
  _events = [];
  events: Array<Calitem> = [];
  isDataloaded: boolean;

  constructor(private router: Router,
    private localDb: Storage,) {
    this.isDataloaded = false;


  }

  addEventToCalendar(calitem: Calitem) {
    console.log(calitem);
    calitem.startTime = new Date(calitem.startTime);
    calitem.endTime = new Date(calitem.endTime);
    this.events.push(calitem);
    this.storeEvents();
  }
  getAllEvents() {

    return this.events;
  }
  storeEvents() {
    this.localDb.set('events', this.events);
  }


  loadToArry() {
    if (this.isDataloaded != true) {
      this._events.forEach(element => {
        console.log(element.title + "wird geladen")
        element.startTime = new Date(element.startTime);
        element.endTime = new Date(element.endTime);
        element.allDay = true;
        this.events.push(element);
        console.log(element.title + "zum Kalender hinzugefügt")
        this.isDataloaded = true;
      });
    }

  }

  async loadEventsAsync() {

    if (await this.localDb.get('events')) {
      this._events = await this.localDb.get('events');
      console.log(await this.localDb.get('events'));
      console.log("Ausm Speicher init");


    }
  }
}
