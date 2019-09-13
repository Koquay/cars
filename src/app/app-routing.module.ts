import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakesComponent } from './makes/makes.component';
import { ModelsComponent } from './models/models.component';


const routes: Routes = [
  {
    path: 'makes',
    component: MakesComponent,
    data: {breadcrumb: 'Makes'}
  },
  {
    path: 'cars',
    loadChildren: './cars/cars.module#CarsModule',
    data: {breadcrumb: 'Cars'}
  },
  {
    path: 'selected-car',
    loadChildren: './selected-car/selected-car.module#SelectedCarModule',
    data: {breadcrumb: 'Selected Car'}
  },
  {
    path: '', pathMatch: 'prefix', redirectTo: 'makes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
