import { GoalStep } from './goalStep'
import { Category } from './category'

export class Goal {
  id: number;
  name: string;
  category: Category;
  why: string;
  picture: string;
  desc: string;
  steps: Array<GoalStep>;
  activ: boolean;

  constructor(name: string, why: string) {

    this.name = name;
    this.why = why;
    this.steps = [];
    this.activ = true
  }

  addStep(step: GoalStep) {
    if (step) {
      this.steps.push(step);
    }

  }
}