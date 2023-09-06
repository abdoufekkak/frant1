import { Component,Output,OnInit ,EventEmitter} from '@angular/core';
import { serviceRestau } from '../../service/serviceResau';
import { Restau } from '../../model/Restau';
import { Ville } from 'src/app/ville/model/ville';
import {tap,Subscription} from "rxjs"
@Component({
  selector: 'app-add-or-mod-restau',
  templateUrl: './add-or-mod-restau.component.html',
  styleUrls: ['./add-or-mod-restau.component.scss']
})
export class AddOrModRestauComponent implements OnInit {

  sharedData!: Restau;
  private subscription!: Subscription;
button_!:string;

@Output() valueEmitted = new EventEmitter<{ restau: Restau, isBoolean: boolean }>();



  constructor(private service: serviceRestau) {
    this.subscription = this.service.getSharedData().pipe(
     
    ).subscribe((data) => {
      this.sharedData = data;
      this.restau.nom_restau=data.nom_restau;
      this.restau.ville_restau=data.ville_restau;
      this.restau.tarif=data.tarif;
      this.restau.contact=data.contact;
      this.restau.disponibilite=data.disponibilite;
      this.restau.email=data.email;
      this.restau.mdp=data.mdp;
      this.restau.id_restau=data.id_restau;
      this.restau.date_debut=data.date_debut;
      this.restau.date_fin=data.date_fin;

     this.button_="update"
    });
  }

  restau:Restau={
    id_restau:-1,
    nom_restau:'',
    ville_restau: '',
    tarif: 0,
    contact:"",
    disponibilite:"d",
    email: '2',
    logo:"1",
    date_debut:"",
    date_fin:"",
  mdp: '',
};

ngOnInit(): void { 
  this.button_="envoyer"
  
}
  
  onSubmit(){
if(this.button_=="envoyer"){
  this.service.addrestau(this.restau).pipe(tap((value)=>{
    this.valueEmitted.emit({restau:value,isBoolean:true});
  })).subscribe(e=>console.log(e,"new admin"))
}else{

   this.service.updaterestau(this.restau,this.restau.id_restau).pipe(tap((value)=>{
    this.valueEmitted.emit({restau:value,isBoolean:false});
  })).subscribe(e=>console.log(e,"new admin"))
}
   

  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
