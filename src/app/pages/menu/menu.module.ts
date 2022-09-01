import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { MiCuentaComponent } from 'src/app/components/mi-cuenta/mi-cuenta.component';
import { MenuPasajeroComponent } from 'src/app/components/menu-pasajero/menu-pasajero.component';
import { MenuConductorComponent } from 'src/app/components/menu-conductor/menu-conductor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage, MiCuentaComponent, MenuPasajeroComponent, MenuConductorComponent]
})
export class MenuPageModule {}
