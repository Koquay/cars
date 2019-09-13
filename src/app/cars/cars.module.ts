import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CarsRoutingModule } from './cars-routing.module';
import {CarsComponent } from './cars.component';
import { SharedModule } from '../shared/modules/shared/shared.module';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CarsComponent],
  imports: [
    CommonModule,
    FormsModule,
   CarsRoutingModule,
    SharedModule,
    MatSelectModule,
    MatSliderModule,
    MatCardModule,
    MatInputModule
  ]
})
export class CarsModule { }
