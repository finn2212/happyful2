import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalTodosPageRoutingModule } from './goal-todos-routing.module';

import { GoalTodosPage } from './goal-todos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalTodosPageRoutingModule
  ],
  declarations: [GoalTodosPage]
})
export class GoalTodosPageModule {}
