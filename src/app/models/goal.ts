import { GoalStep } from './goalStep';
import { Category } from './category';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './todo';

export class Goal {
  id: string;
  name: string;
  category: Category;
  why: string;
  picture: string;
  desc: string;
  steps: Array<GoalStep>;
  activ: boolean;
  startTime: Date;
  endTime: Date;
  title: string;
  calItemId: string;
  todoIds: Array<string>;

  constructor(name: string, why: string) {

    this.name = name;
    this.why = why;
    this.steps = new Array<GoalStep>();
    this.todoIds = new Array<string>();
    this.activ = true
    this.id = uuidv4();
  }

  addStep(step: GoalStep) {
    if (step) {
      this.steps.push(step);
    }

  }
}