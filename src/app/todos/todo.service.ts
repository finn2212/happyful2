import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';
import { CalenderService } from '../calendar/calender.service';
import { Calitem } from '../models/calItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private calService: CalenderService
  ) { }
  taskList = new BehaviorSubject<Todo[]>([]);

  getTodosObservable() {
    return this.taskList.asObservable();
  }
  addTodo(name: string) {
    let todo = new Todo(name);
    this.taskList.getValue().push(todo);

  }
  deleteTodo(index: number) {
    this.taskList.getValue().splice(index, 1);
  }
  addToToday(index: number) {
    const name = this.taskList.getValue()[index].name;
    const calitem = new Calitem(name, new Date(), new Date());
    this.calService.addEventToCalendar(calitem);

  }

}
