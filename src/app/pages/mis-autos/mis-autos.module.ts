import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisAutosPageRoutingModule } from './mis-autos-routing.module';

import { MisAutosPage } from './mis-autos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisAutosPageRoutingModule
  ],
  declarations: [MisAutosPage]
})
export class MisAutosPageModule {}
