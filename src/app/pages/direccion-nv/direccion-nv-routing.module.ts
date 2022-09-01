import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DireccionNVPage } from './direccion-nv.page';

const routes: Routes = [
  {
    path: '',
    component: DireccionNVPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DireccionNVPageRoutingModule {}
