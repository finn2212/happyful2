import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth/auth.module').then(m => m.AuthPageModule)
  },

  {
    path: 'cal-modal',
    loadChildren: () => import('./calendar/cal-modal/cal-modal.module').then(m => m.CalModalPageModule),
    canLoad: [AuthGuard]
  },

  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then(m => m.LoadingPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil/profil.module').then(m => m.ProfilPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'development',
    loadChildren: () => import('./development/development/development.module').then(m => m.DevelopmentPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback/feedback.module').then(m => m.FeedbackPageModule),
    canLoad: [AuthGuard]
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
