import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {

        path: 'goals',
        loadChildren: () => import('../goals/goals.module').then(m => m.GoalsPageModule)
      },
      {
        path: 'calender',
        loadChildren: () => import('../calendar/caladar/caladar.module').then(m => m.CaladarPageModule)
      },
      {
        path: 'calendar-detail',
        loadChildren: () => import('../calendar/calendar-detail/calendar-detail.module').then(m => m.CalendarDetailPageModule)
      },
      {
        path: 'todos',
        loadChildren: () => import('../todos/todos.module').then(m => m.TodosPageModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard/dashboard.module').then(m => m.DashboardPageModule)
      }, {
        path: 'journal',
        loadChildren: () => import('../journal/journal/journal.module').then(m => m.JournalPageModule)
      },
      {
        path: 'talk',
        loadChildren: () => import('../talk/talk/talk.module').then(m => m.TalkPageModule)
      },
      {
        path: 'diary',
        loadChildren: () => import('../journal/diary/diary.module').then(m => m.DiaryPageModule)
      },
      {
        path: 'mood',
        loadChildren: () => import('../journal/mood/mood.module').then(m => m.MoodPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/calender',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
