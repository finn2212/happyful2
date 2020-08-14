import { Component, OnInit } from '@angular/core';
import { DiaryPage } from '../diary/diary.page';

import { ActionSheetController, ModalController } from '@ionic/angular';
import { JournalService } from '../journal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss']
})
export class JournalPage implements OnInit {
  journals;

  constructor(public actionSheetController: ActionSheetController, private modalCtrl: ModalController, private journalService: JournalService, private router: Router
  ) {
    this.journalService.getJournalsObservable().subscribe(res => {
      console.log('new Value: ', res);
      this.journals = res;
    });
  }

  ngOnInit() {
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Woran denkst du gerade?',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Trag etwas ins Tagebuch ein',
        handler: () => {
          this.router.navigateByUrl('tabs/journal/diary');
        }
      }, {
        text: 'Stimmung festlegen',
        handler: () => {
          this.router.navigateByUrl('tabs/journal/mood');
        }
      }, {
        text: 'Bildhinzufügen',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Lebensbalance bestimmen',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Abbrechen',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


  async openDiaryModal() {
    const modal = await this.modalCtrl.create({
      component: DiaryPage,
      cssClass: 'journal-modal',
      backdropDismiss: false
    });
    await modal.present();
  }

}


