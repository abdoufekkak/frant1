import { Component, OnInit } from '@angular/core';
import { serviceRestau } from './service/serviceResau';
import { Restau } from './model/Restau';
import { Ville } from '../ville/model/ville';

@Component({
  selector: 'app-restau',
  templateUrl: './restau.component.html',
  styleUrls: ['./restau.component.scss']
})
export class RestauComponent implements OnInit  {

  restaus!:Restau[];
constructor(private service :serviceRestau){

}
  ngOnInit(): void { 
    this.service.getrestau().subscribe(data=>this.restaus=data,err=>console.log(err));

  }
  getValueFromtable(valeur:Restau){

  }

  getValueFromChild(data: { restau: Restau , isBoolean: boolean }) {
    // const x: Admin = new Admin();
//     x.id_admin=value.id_admin
// x.nom_admin = value.nom_admin;
// x.prenom_admin = value.prenom_admin;
// x.email_admin = value.email_admin
// x.numero_admin = value.numero_admin;
// x.url_img =value.role_admin;
// x.role_admin = value.role_admin;
// x.dispo_admin =value.dispo_admin ;
// x.mdp =  value.mdp;
if(data.isBoolean){
  let  restauss=[...this.restaus]
  restauss.push(data.restau)
  this.restaus=restauss;
 }
else{
  let  res=[...this.restaus]

  const adminTrouve = res.find((admin) => admin.id_restau === data.restau.id_restau);
  if (adminTrouve) {
    adminTrouve.nom_restau = data.restau.nom_restau;
adminTrouve.ville_restau = data.restau.ville_restau;
adminTrouve.contact = data.restau.contact
adminTrouve.disponibilite = data.restau.disponibilite;
adminTrouve.logo =data.restau.logo;
adminTrouve.mdp = data.restau.mdp;
adminTrouve.tarif =data.restau.tarif ;
this.restaus=res;
  }


}


}
}
