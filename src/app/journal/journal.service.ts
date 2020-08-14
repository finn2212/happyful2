import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Journal } from '../models/journal';
import { Diary } from '../models/diary';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  journalList = new BehaviorSubject<Journal[]>([]);


  constructor() {
  }
  getJournalsObservable() {
    return this.journalList.asObservable();
  }

  createNewJournalEntry(diary: Diary) {
    this.journalList.getValue().push(diary);
  }
}
