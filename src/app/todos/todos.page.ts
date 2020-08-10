import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {
  taskName: any = ''; // Entered Text
  taskList; // Array to store tasks

  constructor(
    private todoService: TodoService
  ) {
    this.todoService.getTodosObservable().subscribe(res => {
      console.log('new Value: ', res);
      this.taskList = res;
    });
  }

  ngOnInit() {
  }



  // addTask Function
  // First we check if the text is entered or not in input box by verifying if length > 0
  // If length is greater than 0, then only we add taskName to taskList array
  // After adding we reset the taskName
  addTask() {
    if (this.taskName.length > 0) {
      this.todoService.addTodo(this.taskName);
      this.taskName = "";
    }




  }
  // deleteTask Function
  // When user clicks the delete task button, this function is called with index i as parameter
  // Since tasks are added to taskList, we delete the task at index i using splice() array method
  // This deletes only that task at index i
  deleteTask(index) {
    this.todoService.deleteTodo(index);
  }
  addToToday(index) {
    this.todoService.addToToday(index);
  }


}
