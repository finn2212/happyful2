import { Journal } from './journal';


export class Diary implements Journal {
  title: string;
  date: Date;
  text: string;
  /**
   *
   */
  constructor(title: string, date: Date, text: string) {
    this.date = date;
    this.title = title;
    this.text = text;

  }
}