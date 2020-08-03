import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewGoalSubmitPage } from './new-goal-submit.page';

const routes: Routes = [
  {
    path: '',
    component: NewGoalSubmitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewGoalSubmitPageRoutingModule {}
