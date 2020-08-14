import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalenderService } from '../calendar/calender.service';
import { GoalsService } from '../goals/goals.service';
import { TodoService } from '../todos/todo.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(
    private router: Router,
    private calService: CalenderService,
    private goalService: GoalsService,
    private todoService: TodoService) {
    this.wait();
  }

  ngOnInit() {
  }

  wait() {
    console.log(this.calService.isDataloaded);
    if (!this.calService.isDataloaded) {
      this.calService.loadEventsAsync();
      this.goalService.loadGoalsAsync();
      this.todoService.loadTodosAsync();
      let TIME_IN_MS = 500;
      let hideFooterTimeout = setTimeout(() => {
        this.calService.loadToArry();
        this.goalService.loadToArry();
        this.todoService.loadToArry();
        let hideFooterTimeout = setTimeout(() => {
          this.router.navigateByUrl('/tabs/dashboard');

        }, TIME_IN_MS);

      }, TIME_IN_MS);
    }
    // this.router.navigateByUrl('/tabs/calender');

  }
}
