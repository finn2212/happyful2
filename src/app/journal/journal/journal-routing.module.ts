import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JournalPage } from './journal.page';

const routes: Routes = [
  {
    path: '',
    component: JournalPage
  },
  {
    path: 'mood',
    loadChildren: () => import('../mood/mood.module').then(m => m.MoodPageModule)
  },
  {
    path: 'diary',
    loadChildren: () => import('../diary/diary.module').then(m => m.DiaryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournalPageRoutingModule { }
