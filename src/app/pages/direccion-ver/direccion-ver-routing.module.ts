import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DireccionVerPage } from './direccion-ver.page';

const routes: Routes = [
  {
    path: '',
    component: DireccionVerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DireccionVerPageRoutingModule {}
