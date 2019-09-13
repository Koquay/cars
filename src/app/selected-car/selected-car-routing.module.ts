import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectedCarComponent } from './selected-car.component';


const routes: Routes = [
  {
    path: ':carId',
    component: SelectedCarComponent,
    data: {breadcrumb: 'Selected Car'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectedCarRoutingModule { }
