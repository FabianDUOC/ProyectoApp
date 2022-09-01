import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DireccionVerPageRoutingModule } from './direccion-ver-routing.module';

import { DireccionVerPage } from './direccion-ver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DireccionVerPageRoutingModule
  ],
  declarations: [DireccionVerPage]
})
export class DireccionVerPageModule {}
