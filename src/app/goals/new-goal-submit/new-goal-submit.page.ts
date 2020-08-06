import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GoalsService } from '../goals.service'
import { Router } from '@angular/router';
import { GoalStep } from '../../models/goalStep'
import { Calitem } from 'src/app/models/calItem';
import { CalenderService } from '../../calendar/calender.service'

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
  newGoalDesc;
  newStepDate;

  constructor(private goalsService: GoalsService,
    private router: Router,
    private calSerice: CalenderService
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
    this.goalsService.newGoalDesc = form.value.desc;
    if (form.value.startDate) {
      this.goalsService.newGoalStartDate = form.value.startDate;
      console.log(form.value.startDate);
    }
    if (form.value.startDate) {
      this.goalsService.newGoalEndDate = form.value.endDate;
      console.log(form.value.endDate);
    }

    this.steps = [];
    await this.goalsService.createGoal();
    form.reset();
  }
  addStep() {
    if (this.newStepString) {
      const step = new GoalStep(this.newStepString);
      let end = new Date(2020, 10, 4, 14, 30);
      console.log(this.newStepDate);
      let calitem = new Calitem(this.newStepString, new Date(this.newStepDate), end);
      this.calSerice.addEventToCalendar(calitem);
      step.calItem = calitem;
      this.steps.push(step);
      console.log(calitem);
    }
    this.newStepString = '';
    console.log('addStep');
  }


}
