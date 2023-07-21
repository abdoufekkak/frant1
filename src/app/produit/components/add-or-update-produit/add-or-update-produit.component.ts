import { Component,Output ,EventEmitter,OnInit} from '@angular/core';
import { Produit } from '../../model/produit';
import { serviceProduit } from '../../service/serciceProduit';
import { serviceRestau } from 'src/app/restau/service/serviceResau';
import { Restau } from 'src/app/restau/model/Restau';
import {tap,Subscription} from "rxjs"
@Component({
  selector: 'app-add-or-update-produit',
  templateUrl: './add-or-update-produit.component.html',
  styleUrls: ['./add-or-update-produit.component.scss']
})
export class AddOrUpdateProduitComponent  implements OnInit{

  sharedData!: Produit;
  private subscription!: Subscription;
button_!:string;
resteaus!:Restau[];

@Output() valueEmitted = new EventEmitter<{ produit: Produit, isBoolean: boolean }>();



  constructor(private service: serviceProduit,private serviceres:serviceRestau) {
    this.subscription = this.service.getSharedData().pipe(
     
    ).subscribe((data) => {
      this.sharedData = data;
      this.produit.id_prod=data.id_prod;
      this.produit.nom=data.nom;
      this.produit.prix=data.prix;
      this.produit.categorie=data.categorie;
      this.produit.supp=0;
      this.produit.id_restau=data.id_restau;
      this.produit.url_image=data.url_image;
      this.produit.nom_restau=data.nom_restau;
      this.produit.dispo=data.dispo
     this.button_="update"
    });
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

   this.service.updateProduit(this.produit,this.produit.id_prod).pipe(tap((value)=>{
    this.valueEmitted.emit({produit:value,isBoolean:false});
  })).subscribe(e=>console.log(e,"new admin"))
}
   
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
