import { Component,Output ,EventEmitter,OnInit} from '@angular/core';
import { Produit } from '../../model/produit';
import { serviceProduit } from '../../service/serciceProduit';
import { serviceRestau } from 'src/app/restau/service/serviceResau';
import { Restau } from 'src/app/restau/model/Restau';
import {tap} from "rxjs"
@Component({
  selector: 'app-add-or-update-produit',
  templateUrl: './add-or-update-produit.component.html',
  styleUrls: ['./add-or-update-produit.component.scss']
})
export class AddOrUpdateProduitComponent  implements OnInit{

  // sharedData!: Admin;
  // private subscription!: Subscription;
button_!:string;
resteaus!:Restau[];

@Output() valueEmitted = new EventEmitter<{ produit: Produit, isBoolean: boolean }>();



  constructor(private service: serviceProduit,private serviceres:serviceRestau) {
    // this.subscription = this.service.getSharedData().pipe(
     
    // ).subscribe((data) => {
    //   this.sharedData = data;
    //   this.admin.nom_admin=data.nom_admin;
    //   this.admin.prenom_admin=data.prenom_admin;
    //   this.admin.email_admin=data.email_admin;
    //   this.admin.url_img=data.url_img;
    //   this.admin.role_admin=data.role_admin;
    //   this.admin.dispo_admin=data.dispo_admin;
    //   this.admin.mdp=data.mdp;
    //   this.admin.id_admin=data.id_admin;
    //  this.button_="update"
    // });
  }

  produit:Produit={
    id_prod:-1,
    nom:'',
    prix: 0,
    categorie: '',
    supp:0,
    id_restau:-1,
    url_image: 'wer',
    nom_restau:"",
    dispo:0
};



 
  ngOnInit(): void {
   this.button_="envoyer"
   this.serviceres.getrestau().subscribe(e=>this.resteaus=e,err=>console.log(err))

  }
  onSubmit(){
if(this.button_=="envoyer"){
  this.service.addProduit(this.produit).pipe(tap((value)=>{
    this.valueEmitted.emit({produit:value,isBoolean:true});
  })).subscribe(e=>console.log(e,"new admin"))
}else{

  //  this.service.updateadmin(this.admin,this.admin.id_admin).pipe(tap((value)=>{
  //   this.valueEmitted.emit({admin:value,isBoolean:false});
  // })).subscribe(e=>console.log(e,"new admin"))
}
   

  // }
  // ngOnDestroy() {
  //   // this.subscription.unsubscribe();
  // }
}
}
