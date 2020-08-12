import { v4 as uuidv4 } from 'uuid';
import { StringifyOptions } from 'querystring';
export class Todo {

  name: string;
  id: string;
  state: string;
  externalId: string;

  constructor(name: string, state: string) {
    this.name = name;
    this.state = state;
    this.id = uuidv4();




  }
}