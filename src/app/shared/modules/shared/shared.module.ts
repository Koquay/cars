import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { BreadcrumbComponent } from '../../breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbComponent
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
