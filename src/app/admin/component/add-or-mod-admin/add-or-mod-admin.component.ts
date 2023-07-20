import { Component,EventEmitter,Output,OnInit,Input, OnChanges, SimpleChanges , } from '@angular/core';
import { Admin } from '../../model/admin';
import { serviceAdmin } from '../../service/serviceAdmin';
import { tap ,Subscription} from 'rxjs';

@Component({
  selector: 'app-add-or-mod-admin',
  templateUrl: './add-or-mod-admin.component.html',
  styleUrls: ['./add-or-mod-admin.component.scss']
})
export class AddOrModAdminComponent implements OnInit  ,OnChanges{
  sharedData!: Admin;
  private subscription!: Subscription;
button_!:string;

@Output() valueEmitted = new EventEmitter<{ admin: Admin, isBoolean: boolean }>();



  constructor(private service: serviceAdmin) {
    this.subscription = this.service.getSharedData().pipe(
     
    ).subscribe((data) => {
      this.sharedData = data;
      this.admin.nom_admin=data.nom_admin;
      this.admin.prenom_admin=data.prenom_admin;
      this.admin.email_admin=data.email_admin;
      this.admin.url_img=data.url_img;
      this.admin.role_admin=data.role_admin;
      this.admin.dispo_admin=data.dispo_admin;
      this.admin.mdp=data.mdp;
      this.admin.id_admin=data.id_admin;
     this.button_="update"
    });
  }

  admin:Admin={
    id_admin:-1,
    nom_admin:'',
  prenom_admin: '',
  email_admin: '',
  numero_admin:0,
  url_img:"qwer",
  role_admin: '2',
  dispo_admin:"1",
  mdp: '',
};


  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      console.log('Ancienne valeur de maPropriete :', changes);
    }
  }
  ngOnInit(): void {
   this.button_="envoyer"
  }
  onSubmit(){
if(this.button_=="envoyer"){
  this.service.addadmin(this.admin).pipe(tap((value)=>{
    this.valueEmitted.emit({admin:value,isBoolean:true});
  })).subscribe(e=>console.log(e,"new admin"))
}else{

   this.service.updateadmin(this.admin,this.admin.id_admin).pipe(tap((value)=>{
    this.valueEmitted.emit({admin:value,isBoolean:false});
  })).subscribe(e=>console.log(e,"new admin"))
}
   

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

