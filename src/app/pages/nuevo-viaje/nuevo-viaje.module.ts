import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoViajePageRoutingModule } from './nuevo-viaje-routing.module';
import {MatInputModule} from '@angular/material/input';
import { NuevoViajePage } from './nuevo-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoViajePageRoutingModule,
    MatInputModule,
  ],
  declarations: [NuevoViajePage]
})
export class NuevoViajePageModule {}
