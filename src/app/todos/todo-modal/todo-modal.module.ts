import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoModalPageRoutingModule } from './todo-modal-routing.module';

import { TodoModalPage } from './todo-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoModalPageRoutingModule
  ],
  declarations: [TodoModalPage]
})
export class TodoModalPageModule {}
