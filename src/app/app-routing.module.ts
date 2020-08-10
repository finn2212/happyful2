import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'auth', loadChildren: () => import('./auth/auth/auth.module').then(m => m.AuthPageModule) },

  {
    path: 'goals',
    loadChildren: () => import('./goals/goals.module').then(m => m.GoalsPageModule)
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./calendar/cal-modal/cal-modal.module').then(m => m.CalModalPageModule)
  },
  {
    path: 'caladar',
    loadChildren: () => import('./calendar/caladar/caladar.module').then(m => m.CaladarPageModule)
  },
  {
    path: 'calendar-detail',
    loadChildren: () => import('./calendar/calendar-detail/calendar-detail.module').then(m => m.CalendarDetailPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then(m => m.LoadingPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth/auth.module').then(m => m.AuthPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
