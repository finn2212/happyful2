import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewGoalWhyPageRoutingModule } from './new-goal-why-routing.module';

import { NewGoalWhyPage } from './new-goal-why.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewGoalWhyPageRoutingModule
  ],
  declarations: [NewGoalWhyPage]
})
export class NewGoalWhyPageModule {}
