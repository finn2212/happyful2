

export class GoalStep {
  id: number;
  name: string;
  priority: number;
  calItemId: string;

  constructor(name: string) {

    this.name = name;
    this.priority = 1;
  }
}