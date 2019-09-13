import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing.module';
import { ModelsComponent } from './models.component';
import { SharedModule } from '../shared/modules/shared/shared.module';


@NgModule({
  declarations: [ModelsComponent],
  imports: [
    CommonModule,
    ModelsRoutingModule,
    SharedModule
  ]
})
export class ModelsModule { }
