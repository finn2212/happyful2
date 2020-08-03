export class GoalStep {
  id: number;
  name: string;
  priority: number;

  constructor(name: string) {

    this.name = name;
    this.priority = 1;
  }
}