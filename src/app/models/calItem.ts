export class Calitem {
  title: string;
  startTime: Date;
  endTime: Date;
  allDay: boolean

  constructor(title: string, startTime: Date, endTime: Date) {

    this.title = title;
    this.startTime = startTime;
    this.endTime = endTime;
    this.allDay = false;
  }
}