import { Component, Input } from '@angular/core';
import { Calcule } from '../../model/calcule';
import { serviceDashbord } from 'src/app/dashbord/service/serviceDashbord';

@Component({
  selector: 'app-tableau-calcule',
  templateUrl: './tableau-calcule.component.html',
  styleUrls: ['./tableau-calcule.component.scss']
})
export class TableauCalculeComponent {

  constructor(private service:serviceDashbord){

  }

  @Input() calcules!:Calcule[]


  supprimer(id_restau:number){
  

this.service.credit(id_restau).subscribe(e=>console.log(e),err=>console.log(err))
  }
  
}
