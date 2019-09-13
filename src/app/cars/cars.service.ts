import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private carsUrl ='/api/cars/';
  private cars;
  
  constructor(
    private httpClient:HttpClient
  ) { 
    this.createDB();
  }

  public getCars(make) {
    return this.httpClient.get(`${this.carsUrl}${make}`).pipe(
      tap(cars => {
        console.log('cars', cars)
        this.cars = cars;
    })
    )
  }

  public getCar(carId) {
    const car = this.cars.find(car => car._id == carId);
    return of(car);
  }

  public getFilterData(make) {
    return forkJoin([this.getYears(make), this.getModels(make), this.getMinMaxPrice(make)])
  }

  private getMinMaxPrice(make) {
    let prices = [];
    let cars = this.cars.filter(car => car.make == make);

    for(let car of cars) {
      prices.push(car.price)
    }

    prices = prices.sort();
    let minMaxPrice = [];
    minMaxPrice[0] = prices[0];
    minMaxPrice[1] = prices[prices.length-1];
    

    console.log('min max prices', minMaxPrice)
    
    return of(minMaxPrice);
  }

  private getYears(make) {
    let years = [];
    let cars = this.cars.filter(car => car.make == make);

    for(let car of cars) {
      years.push(car.year)
    }

    years = _.uniq(years.sort());
    console.log('years', years)
    return of(years);
  }

  private getModels(make) {
    let models = [];
    let cars = this.cars.filter(car => car.make == make);

    for(let car of cars) {
      models.push(car.model)
    }

    models = _.uniq(models.sort());
    console.log('models', models)
    return of(models);
  }

  public filterCars(filter, maxPrice?) {
    let filteredCars = this.cars;

    if(filter.year) {
      filteredCars = filteredCars.filter(car => car.year == filter.year);
    }

    if(filter.model) {
      filteredCars = filteredCars.filter(car => car.model == filter.model);
    }

    if(maxPrice) {
      filteredCars = filteredCars.filter(car => car.price >= filter.price && car.price <= maxPrice );
    }    

    return of(filteredCars);
  }

  public getCurrentCars() {
    return of(this.cars);
  }

  private createDB() {

  }
}
