import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalenderService } from '../calendar/calender.service';
import { GoalsService } from '../goals/goals.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(
    private router: Router,
    private calService: CalenderService,
    private goalService: GoalsService) {
    this.wait();
  }

  ngOnInit() {
  }

  wait() {

    this.calService.loadEventsAsync();
    this.goalService.loadGoalsAsync();
    let TIME_IN_MS = 2000;
    let hideFooterTimeout = setTimeout(() => {
      this.calService.loadToArry();
      let hideFooterTimeout = setTimeout(() => {
        this.router.navigateByUrl('/tabs/calender');

      }, TIME_IN_MS);

    }, TIME_IN_MS);
  }
}
