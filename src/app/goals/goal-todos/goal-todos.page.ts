import { Component, OnInit } from '@angular/core';
import { GoalsService } from '../goals.service';
import { Todo } from 'src/app/models/todo';
import { Router } from '@angular/router';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-goal-todos',
  templateUrl: './goal-todos.page.html',
  styleUrls: ['./goal-todos.page.scss'],
})
export class GoalTodosPage implements OnInit {
  newGoal: string;
  newTodos: Array<Todo>;
  taskName: string;
  constructor(private goalService: GoalsService, private router: Router) {
    this.newTodos = new Array();
  }


  ngOnInit() {
    if (this.goalService.newGoalName)
      this.newGoal = this.goalService.newGoalName;
  }
  addTask() {
    if (this.taskName.length > 0) {
      const newTodo = new Todo(this.taskName, 'sometime');
      this.newTodos.push(newTodo);
    }
    this.taskName = "";

  }
  continue() {
    this.newTodos.forEach(el => {
      this.goalService.newGoalTodos.push(el);
    })

    this.router.navigateByUrl('/tabs/goals/new-goal-submit');

  }


}
