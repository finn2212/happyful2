import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.page.html',
  styleUrls: ['./mood.page.scss'],
})
export class MoodPage implements OnInit {
  moodisSet: boolean;
  mood;

  constructor(private router: Router) {
    this.moodisSet = false;
  }

  ngOnInit() {
  }

  save() {
    this.router.navigateByUrl('tabs/journal');
  }
  setMood(mood: string) {
    this.moodisSet = true;
    console.log(mood);
  }

}
