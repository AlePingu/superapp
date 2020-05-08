import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevotabPageRoutingModule } from './nuevotab-routing.module';

import { NuevotabPage } from './nuevotab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevotabPageRoutingModule
  ],
  declarations: [NuevotabPage]
})
export class NuevotabPageModule {}
