import { Component, OnInit } from '@angular/core';
import { serviceRestau } from 'src/app/restau/service/serviceResau';
import { serviceDashbord } from '../../service/serviceDashbord';
import { Calcule } from './model/calcule';
import { serviceCards } from '../cars/service/servicecard';
import { Cards } from '../cars/model/cars';

@Component({
  selector: 'app-calcule',
  templateUrl: './calcule.component.html',
  styleUrls: ['./calcule.component.scss']
})
export class CalculeComponent implements OnInit {

  calcules!:Calcule[];
  cards!:Cards

  constructor(private service:serviceDashbord,private servicecard:serviceCards)
  {
  }
   

  calculer_rbah(){

    var  s=0;
    for(let i=0;i<this.calcules.length;i++){
 s=s+this.calcules[i].prix_total;
    }
    
    this.servicecard.getSharedData().subscribe(data=>{this.cards=data;
      this.cards.credit=s
    })
    this.servicecard.setSharedData(this.cards)
    
  }
ngOnInit(): void {
  this.service.getcalcule().subscribe(data=>{this.calcules=data
  this.  calculer_rbah();}
    ,err=>console.log(err));

}



}
