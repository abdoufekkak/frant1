import { Component, OnInit } from '@angular/core';
import { serviceRestau } from 'src/app/restau/service/serviceResau';
import { serviceDashbord } from '../../service/serviceDashbord';
import { Calcule } from './model/calcule';

@Component({
  selector: 'app-calcule',
  templateUrl: './calcule.component.html',
  styleUrls: ['./calcule.component.scss']
})
export class CalculeComponent implements OnInit {

  calcules!:Calcule[];

  constructor(private service:serviceDashbord)
  {
  }
   
ngOnInit(): void {
  this.service.getcalcule().subscribe(data=>this.calcules=data,err=>console.log(err));

}



}
