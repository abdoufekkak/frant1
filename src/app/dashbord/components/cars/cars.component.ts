import { Component } from '@angular/core';
import { Cards } from './model/cars';
import { Subscription } from 'rxjs';
import { serviceCards } from './service/servicecard';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {


  sharedData!: Cards;
  private subscription!: Subscription;


  constructor(private service: serviceCards) {
    this.subscription = this.service.getSharedData().pipe(
     
    ).subscribe((data) => {
      this.sharedData = data;
    });
  }
}
