import { Calitem } from './calItem';

export class GoalStep {
  id: number;
  name: string;
  priority: number;
  calItem: Calitem;

  constructor(name: string) {

    this.name = name;
    this.priority = 1;
  }
}