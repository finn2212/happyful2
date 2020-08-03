import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GoalsService } from './goals.service'
import { Goal } from '../models/goal'
import { Router } from '@angular/router';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {


  goals: Array<Goal> = [];
  isActiveGoals = true;

  constructor(
    private goalsService: GoalsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.goals = this.goalsService.getGoals();
    console.log("init")

  }

  ionViewWillEnter() {
    console.log("golas Reloaded")
    this.goals = this.goalsService.getGoals();

  }
  onGoalSelected(goal: Goal) {
    this.goalsService.selectedGoal = goal;
    this.router.navigateByUrl('/goals/goal-detail');

  }

  newGoal() {
    this.router.navigateByUrl('/goals/choose-category');
  }
  segmentChanged(ev: any) {
    this.isActiveGoals = !this.isActiveGoals;
    console.log("only ative: " + this.isActiveGoals)
  }

  finischGoal(goal: Goal) {
    this.goalsService.updateGoal(this.goals);
    goal.activ = false;
  }
  deleteGoal(goal: Goal) {
    const index: number = this.goals.indexOf(goal);
    if (index !== -1) {
      this.goals.splice(index, 1);
    }
    this.goalsService.updateGoal(this.goals);
  }
}
