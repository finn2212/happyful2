import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GoalsService } from '../goals.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-goal',
  templateUrl: './new-goal.page.html',
  styleUrls: ['./new-goal.page.scss'],
})
export class NewGoalPage implements OnInit {

  constructor(
    private goalsService: GoalsService,
    private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {

    this.goalsService.newGoalName = form.value.name;
    this.router.navigateByUrl('/goals/new-goal-why');
    form.reset();
  }

}
