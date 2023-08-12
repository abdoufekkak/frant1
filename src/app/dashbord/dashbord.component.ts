import { Component, OnInit } from '@angular/core';
import { Dashbord } from './model/dashbord';
import { serviceDashbord } from './service/serviceDashbord';
import { Calcule } from './components/calcule/model/calcule';
import { serviceCards } from './components/cars/service/servicecard';
import { Cards } from './components/cars/model/cars';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {


  dashbors!:Dashbord[];
  cards!:Cards

constructor(private service :serviceDashbord,private servicecard:serviceCards){

}
calculer_rbah(){

  var  s=0;
    var annules=0;
    for(let i=0;i<this.dashbors.length;i++){
      if(this.dashbors[i].annuler ==1 ){
        annules=annules+1
      }
 s=s+this.dashbors[i].rbah_taoufik;
    }
    
    this.servicecard.getSharedData().subscribe(data=>{this.cards=data;
      this.cards.gain=s
      this.cards.annuler=annules
    })
    this.servicecard.setSharedData(this.cards)
    
}

calcule_Salle(){

  var  s=this.dashbors.length;
  
  
  this.servicecard.getSharedData().subscribe(data=>{this.cards=data;
    this.cards.salle=s
  })
  this.servicecard.setSharedData(this.cards)
  
}

  ngOnInit(): void { 
    this.service.getDashbord().subscribe(data=>{this.dashbors=data ;
      this.calculer_rbah();
      this.calcule_Salle()
    }
      ,err=>console.log(err));

  }
}
