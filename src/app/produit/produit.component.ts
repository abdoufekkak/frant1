import { Component,OnInit } from '@angular/core';
import { serviceProduit } from './service/serciceProduit';
import { Produit } from './model/produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss'],
})
export class ProduitComponent implements OnInit {
  produits!:Produit[];
  produit!:Produit;

  constructor(private service: serviceProduit) {}


  getValueFromChild(data:{produit: Produit, isBoolean: boolean} ){
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
  let  produitss=[...this.produits]
  produitss.push(data.produit)
  this.produits=produitss;}
// }
// else{
//   let  adminss=[...this.admins]

//   const adminTrouve = adminss.find((admin) => admin.id_admin === data.admin.id_admin);
//   if (adminTrouve) {
//     adminTrouve.nom_admin = data.admin.nom_admin;
// adminTrouve.prenom_admin = data.admin.prenom_admin;
// adminTrouve.email_admin = data.admin.email_admin
// adminTrouve.numero_admin = data.admin.numero_admin;
// adminTrouve.url_img =data.admin.role_admin;
// adminTrouve.role_admin = data.admin.role_admin;
// adminTrouve.dispo_admin =data.admin.dispo_admin ;
// adminTrouve.mdp =  data.admin.mdp;
// this.admins=adminss;
//   }

// }
  }

  ngOnInit(): void { 
    this.service.getProduit().subscribe(data=>this.produits=data,err=>console.log(err));
    
  }

  getValueFromtable(value:Produit){
   this.produit=value;
  }
  // getValueFromChild_mod(valeur:Admin){
  //   alert("xcv")
  // }
}
