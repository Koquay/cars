import { Component, OnInit } from '@angular/core';
import { MakesService } from './makes.service';

@Component({
  selector: 'app-makes',
  templateUrl: './makes.component.html',
  styleUrls: ['./makes.component.scss']
})
export class MakesComponent implements OnInit {
  private makes;

  constructor(
    private makesService:MakesService
  ) { }

  ngOnInit() {
    this.getMakes();
  }

  private getMakes() {
    this.makesService.getMakes().subscribe(makes => {
      this.makes = makes;
    })
  }

}
