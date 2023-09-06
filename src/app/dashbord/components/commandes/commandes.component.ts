import { Component, Input, OnInit, numberAttribute } from '@angular/core';
import { serviceDashbord } from '../../service/serviceDashbord';
import { Dashbord } from '../../model/dashbord';
import { serviceCards } from '../cars/service/servicecard';
import { Cards } from '../cars/model/cars';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent  implements OnInit{

  datedebut!:Date;
  datefin!:Date;
 @Input() panies!:Dashbord[];
 cards!:Cards
  constructor(private service:serviceDashbord,private servicecard:serviceCards){


  }

  ngOnInit(): void {

  }
  afficher(panie:Dashbord){
    console.log(panie)
    const date1 = new Date(); // Exemple de date

    const tel = "123-456-7890"; // Exemple de numéro de téléphone
  
this.service.modifyPDFField(date1,panie.nom_client,tel,panie.nom_livreur,String(panie.numero_client),panie.panie)
  }
  calculer_rbah(){

    var  s=0;
    var annules=0;
    for(let i=0;i<this.panies.length;i++){
      if(this.panies[i].annuler ==0){
        annules=annules+1
      }
 s=s+this.panies[i].rbah_taoufik;
    }
    
    this.servicecard.getSharedData().subscribe(data=>{this.cards=data;
      this.cards.gain=s
      this.cards.annuler=annules
    })
    this.servicecard.setSharedData(this.cards)
    
  }  
calcule_Salle(){

  var  s=this.panies.length;

  
  this.servicecard.getSharedData().subscribe(data=>{this.cards=data;
    this.cards.salle=s
  })
  this.servicecard.setSharedData(this.cards)
}
  envoyer(){
    if(this.datedebut&&this.datefin){
      this.service.getDashbord(this.datedebut,this.datefin).subscribe(date=>{
        this.panies=date;
      this.calcule_Salle();
      this.calculer_rbah();
      });
    }
  }

}
