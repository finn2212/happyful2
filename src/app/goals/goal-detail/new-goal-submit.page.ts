import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GoalsService } from '../goals.service'
import { Router } from '@angular/router';
import { Goal } from '../../models/goal';
import { GoalStep } from '../../models/goalStep'

@Component({
  selector: 'app-new-goal-submit',
  templateUrl: './new-goal-submit.page.html',
  styleUrls: ['./new-goal-submit.page.scss'],
})
export class NewGoalSubmitPage implements OnInit {
  newGoalName;
  newGoalWhy;
  steps: Array<GoalStep> = [];
  newStepString;
  newGoalCategory;

  constructor(private goalsService: GoalsService,
    private router: Router,
  ) { }


  ngOnInit() {
    this.newGoalName = this.goalsService.newGoalName;
    console.log(this.newGoalName)
    this.newGoalWhy = this.goalsService.newGoalWhy;
    this.newGoalCategory = this.goalsService.newGoalCategory;
    console.log(this.goalsService.newGoalName);
  }
  ionViewWillEnter() {
    this.newGoalName = this.goalsService.newGoalName;
    console.log(this.newGoalName)
    this.newGoalWhy = this.goalsService.newGoalWhy;
    this.newGoalCategory = this.goalsService.newGoalCategory;
    console.log(this.goalsService.newGoalName);
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
