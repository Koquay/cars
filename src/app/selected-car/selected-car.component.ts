import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars/cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-car',
  templateUrl: './selected-car.component.html',
  styleUrls: ['./selected-car.component.scss']
})
export class SelectedCarComponent implements OnInit {
  private car;
  private readMore = false;
  private readAmountText = "Read more...";
  constructor(
    private carsService:CarsService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getCar();
  }

  private getCar() {
    const carId = this.activatedRoute.snapshot.paramMap.get('carId')

    console.log('carId', carId)

    this.carsService.getCar(carId).subscribe(car => {
      this.car = car;
      console.log('car', car)
    })
  }

  private setDescriptionLength() {
    this.readMore = !this.readMore;

    if(this.readMore) {
      this.readAmountText = "Read less..."
    } else {
      this.readAmountText = "Read more..."
    }
  }
}
