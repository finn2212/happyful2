import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GoalsService } from '../goals.service'
import { Router } from '@angular/router';
import { Goal } from '../../models/goal';
import { GoalStep } from '../../models/goalStep'

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.page.html',
  styleUrls: ['./goal-detail.page.scss'],
})
export class GoalDetailPage implements OnInit {
  GoalName;
  GoalWhy;
  steps: Array<GoalStep> = [];
  newStepString;
  goal: Goal;

  constructor(private goalsService: GoalsService,
    private router: Router,
  ) { }


  ngOnInit() {
    this.goal = this.goalsService.selectedGoal;
    if (!this.goal) {
      this.router.navigateByUrl('/tabs/goals');
    }

  }
  ionViewWillEnter() {
    this.goal = this.goalsService.selectedGoal;

  }

  async onSubmit(form: NgForm) {
    this.goalsService.newGoalSteps = this.steps;
    this.steps = [];
    await this.goalsService.createGoal();
    form.reset();
  }
  addStep() {
    if (this.newStepString) {
      const step = new GoalStep(this.newStepString);
      this.steps.push(step);
    }
    this.newStepString = '';
    console.log('addStep');
  }


}
