import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.page.html',
  styleUrls: ['./todo-modal.page.scss'],
})
export class TodoModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  close() {
    this.modalCtrl.dismiss();
  }

}
