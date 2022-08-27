import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuConductorComponent } from 'src/app/components/menu-conductor/menu-conductor.component';
import { MenuInicioComponent } from 'src/app/components/menu-inicio/menu-inicio.component';
import { MenuPasajeroComponent } from 'src/app/components/menu-pasajero/menu-pasajero.component';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path:'menuInicio',
        component: MenuInicioComponent

      },
      {
        path: 'menuPasajero',
        component: MenuPasajeroComponent
      },
      {
        path: 'menuConductor',
        component: MenuConductorComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
