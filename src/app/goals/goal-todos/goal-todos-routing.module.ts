import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalTodosPage } from './goal-todos.page';

const routes: Routes = [
  {
    path: '',
    component: GoalTodosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalTodosPageRoutingModule {}
