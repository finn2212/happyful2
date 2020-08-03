import { Injectable } from '@angular/core';
import { Goal } from '../models/goal'
import { Storage } from '@ionic/storage';
import { GoalStep } from '../models/goalStep';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  goals: Array<Goal> = [];
  newGoalName: string;
  newGoalWhy: string;
  newGoalCategory;
  newGoalSteps: Array<GoalStep> = [];
  selectedGoal: Goal;

  constructor(
    private localDb: Storage,
    private router: Router
  ) {

  }

  public getGoals(): Array<Goal> {
    return this.goals.slice();
  }
  createGoal() {
    const goal = new Goal(this.newGoalName, this.newGoalWhy);
    goal.steps = this.newGoalSteps;
    goal.category = this.newGoalCategory;
    this.goals.push(goal);
    this.storeGoals();
    this.newGoalSteps = [];
    this.newGoalName = "";
    this.newGoalWhy = "";
    this.router.navigateByUrl('/tabs/goals');

  }

  public updateGoal(goals: Array<Goal>) {
    this.goals = goals;
    this.storeGoals();
  }

  private storeGoals() {
    this.localDb.set('goals', this.goals);
  }
  async loadGoalsAsync() {
    if (await this.localDb.get('goals')) {
      this.goals = await this.localDb.get('goals');
    }

  }
  getSelectedGoal(): Goal {
    return this.selectedGoal;
  }

}
