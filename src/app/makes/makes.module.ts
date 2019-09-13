import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakesRoutingModule } from './makes-routing.module';
import { MakesComponent } from './makes.component';
import { SharedModule } from '../shared/modules/shared/shared.module';


@NgModule({
  declarations: [MakesComponent],
  imports: [
    CommonModule,
    MakesRoutingModule,
    SharedModule
  ]
})
export class MakesModule { }
