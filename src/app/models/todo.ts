import { v4 as uuidv4 } from 'uuid';
import { StringifyOptions } from 'querystring';
export class Todo {

  name: string;
  id: string;

  constructor(name: string) {
    this.name = name;
    this.id = uuidv4();

  }
}