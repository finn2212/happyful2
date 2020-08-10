import { v4 as uuidv4 } from 'uuid';

export class Calitem {
  id: string;
  isGoal: boolean;
  externalId: string;
  title: string;
  startTime: Date;
  endTime: Date;
  allDay: boolean;

  constructor(title: string, startTime: Date, endTime: Date) {

    this.title = title;
    this.startTime = startTime;
    this.endTime = endTime;
    this.allDay = false;
    this.id = uuidv4();
  }
}