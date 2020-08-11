import { v4 as uuidv4 } from 'uuid';
import { StringifyOptions } from 'querystring';
export class Todo {

  name: string;
  id: string;
  isToday: boolean;
  externalId: string;

  constructor(name: string, isToday: boolean) {
    this.name = name;
    this.isToday = isToday;
    this.id = uuidv4();


  }
}