import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DireccionNVPageRoutingModule } from './direccion-nv-routing.module';

import { DireccionNVPage } from './direccion-nv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DireccionNVPageRoutingModule
  ],
  declarations: [DireccionNVPage]
})
export class DireccionNVPageModule {}
