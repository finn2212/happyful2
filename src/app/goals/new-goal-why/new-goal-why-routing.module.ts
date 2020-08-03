import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewGoalWhyPage } from './new-goal-why.page';

const routes: Routes = [
  {
    path: '',
    component: NewGoalWhyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewGoalWhyPageRoutingModule {}
