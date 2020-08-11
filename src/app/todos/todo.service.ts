import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';
import { CalenderService } from '../calendar/calender.service';
import { Calitem } from '../models/calItem';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private calService: CalenderService,
    private localDb: Storage
  ) { }
  taskList = new BehaviorSubject<Todo[]>([]);
  _todos;

  getTodosObservable() {
    return this.taskList.asObservable();
  }
  addTodo(name: string, isToday: boolean) {
    let todo = new Todo(name, isToday);
    this.taskList.getValue().push(todo);
    this.updateTodos();

  }
  addTodoList(todos: Array<Todo>) {
    if (todos) {
      todos.forEach(el => {
        this.taskList.getValue().push(el);
      })
      this.updateTodos();
    }
  }
  deleteTodo(index: number) {
    this.taskList.getValue().splice(index, 1);
  }
  addToToday(index: number) {
    const name = this.taskList.getValue()[index].name;
    const calitem = new Calitem(name, new Date(), new Date());
    calitem.externalId = this.taskList.getValue()[index].id;
    this.calService.addEventToCalendar(calitem);

  }
  changeState(index: number) {
    this.taskList.getValue()[index].isToday = !this.taskList.getValue()[index].isToday;
    this.updateTodos();
  }
  updateTodos() {
    this.localDb.set('todos', this.taskList.getValue());
  }
  loadToArry() {
    if (this._todos) {

      this._todos.forEach(element => {
        this.taskList.getValue().push(element);
      });

    }
  }

  async loadTodosAsync() {
    if (await this.localDb.get('todos')) {
      this._todos = await this.localDb.get('todos');
    }

  }
}
