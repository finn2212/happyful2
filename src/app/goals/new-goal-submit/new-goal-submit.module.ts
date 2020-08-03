import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewGoalSubmitPageRoutingModule } from './new-goal-submit-routing.module';

import { NewGoalSubmitPage } from './new-goal-submit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewGoalSubmitPageRoutingModule
  ],
  declarations: [NewGoalSubmitPage]
})
export class NewGoalSubmitPageModule {}
