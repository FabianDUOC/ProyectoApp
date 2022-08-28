import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarAutoPageRoutingModule } from './editar-auto-routing.module';

import { EditarAutoPage } from './editar-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarAutoPageRoutingModule
  ],
  declarations: [EditarAutoPage]
})
export class EditarAutoPageModule {}
