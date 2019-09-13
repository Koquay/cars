import { Component, OnInit, DoCheck } from '@angular/core';
import { CarsService } from './cars.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit, DoCheck {
  private cars;
  private filter: { year, model, price };
  private years;
  private models;
  private make;
  private minPrice;
  private maxPrice;
  private priceSubject = new Subject();

  constructor(
    private carsService: CarsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.filter = { year: null, model: null, price: this.minPrice }
  }

  ngOnInit() {
    this.getCars();
    this.setUpPriceSubject();
  }

  ngDoCheck() {
    this.priceSubject.next(this.filter.price);
  }

  private setUpPriceSubject() {
    this.priceSubject.pipe(
      distinctUntilChanged(),
      debounceTime(400)
    ).subscribe(value => {
      console.log('debounced value:', value);
      this.sortByPrice();
    });
  }

  private getCars() {
    this.make = this.activatedRoute.snapshot.paramMap.get('make');
    console.log('make', this.make);

    this.carsService.getCars(this.make).subscribe(cars => {
      this.cars = cars;
      this.getFilterData();
    })
  }

  private getFilterData() {
    this.carsService.getFilterData(this.make).subscribe(data => {
      this.years = data[0];
      this.models = data[1];
      let prices = data[2];
      this.minPrice = prices[0];
      this.maxPrice = prices[1] + 1000;
      this.filter.price = this.minPrice;
      console.log('minPrice, maxPrice', this.minPrice, this.maxPrice)
      console.log('data', data)
    })
  }

  private sortByYear(value) {
    console.log('filter by year', value)
    this.filter.year = value;

    this.carsService.filterCars(this.filter).subscribe(cars => {
      this.cars = cars;
    })
  }

  private sortByModel(value) {
    console.log('filter by model', value)
    this.filter.model = value;

    this.carsService.filterCars(this.filter).subscribe(cars => {
      this.cars = cars;
    })
  }

  private sortByPrice() {
    this.carsService.filterCars(this.filter).subscribe(cars => {
      this.cars = cars;
    })
  }

  private clearFiters() {
    this.filter.year = null;
    this.filter.model = null;
    this.filter.price = this.minPrice;
    this.getCurrentCars();
  }

  public getCurrentCars() {
    this.carsService.getCurrentCars().subscribe(cars => {
      this.cars = cars;
    })
  }

  private showClearFiltersBtn() {
    return this.filter.year || this.filter.model || this.filter.price != this.minPrice;
  }


}
