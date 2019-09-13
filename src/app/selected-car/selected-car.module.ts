import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectedCarRoutingModule } from './selected-car-routing.module';
import { SelectedCarComponent } from './selected-car.component';
import { SharedModule } from '../shared/modules/shared/shared.module';


@NgModule({
  declarations: [SelectedCarComponent],
  imports: [
    CommonModule,
    SelectedCarRoutingModule,
    SharedModule
  ]
})
export class SelectedCarModule { }
