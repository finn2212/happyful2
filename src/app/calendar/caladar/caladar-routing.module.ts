import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaladarPage } from './caladar.page';

const routes: Routes = [
  {
    path: '',
    component: CaladarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaladarPageRoutingModule {}
