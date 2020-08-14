import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Diary } from 'src/app/models/diary';
import { JournalService } from '../journal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
})
export class DiaryPage implements OnInit {

  date;
  diaryText: string = '';

  constructor(private modalCtrl: ModalController, private journalService: JournalService, private router: Router) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    this.date = new Date().toLocaleDateString('de-DE', options)


  }


  ngOnInit() {
  }
  close() {
    this.modalCtrl.dismiss();
  }
  save() {

    if (this.diaryText.length > 0) {
      console.log(this.diaryText);
      const newDiaryEntry = new Diary("Tagebucheintrag", this.date, this.diaryText);
      this.journalService.createNewJournalEntry(newDiaryEntry);
      this.diaryText = "";
      this.router.navigateByUrl('tabs/journal');

    }





  }

}
