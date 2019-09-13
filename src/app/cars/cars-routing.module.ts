import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars.component';


const routes: Routes = [
  {
    path: ':make',
    component: CarsComponent,
    data: {breadcrumb: 'Cars'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
