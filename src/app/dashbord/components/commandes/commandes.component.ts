import { Component, Input, OnInit } from '@angular/core';
import { serviceDashbord } from '../../service/serviceDashbord';
import { Dashbord } from '../../model/dashbord';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent  implements OnInit{

  datedebut!:Date;
  datefin!:Date;
 @Input() panies!:Dashbord[];
  constructor(private service:serviceDashbord){


  }

  ngOnInit(): void {
    

  }
  envoyer(){
    if(this.datedebut&&this.datefin){
      this.service.getDashbord(this.datedebut,this.datefin).subscribe(date=>{
        this.panies=date
      });
    }
  }

}
