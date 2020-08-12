import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodosPage } from './todos.page';

const routes: Routes = [
  {
    path: '',
    component: TodosPage
  },
  {
    path: 'todo-modal',
    loadChildren: () => import('./todo-modal/todo-modal.module').then( m => m.TodoModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosPageRoutingModule {}
