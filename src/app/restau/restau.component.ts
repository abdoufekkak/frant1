import { Component, OnInit } from '@angular/core';
import { serviceRestau } from './service/serviceResau';

@Component({
  selector: 'app-restau',
  templateUrl: './restau.component.html',
  styleUrls: ['./restau.component.scss']
})
export class RestauComponent implements OnInit  {

    
constructor(private service :serviceRestau){

}
  ngOnInit(): void { 
  }

}
