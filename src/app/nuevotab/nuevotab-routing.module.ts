import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevotabPage } from './nuevotab.page';

const routes: Routes = [
  {
    path: '',
    component: NuevotabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevotabPageRoutingModule {}
