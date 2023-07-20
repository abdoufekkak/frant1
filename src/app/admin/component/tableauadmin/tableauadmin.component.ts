import { Component, Input,OnInit,EventEmitter,Output,ElementRef ,ViewChild } from '@angular/core';
import { Admin } from '../../model/admin';
import { serviceAdmin } from '../../service/serviceAdmin';
import {pipe,tap} from "rxjs"
@Component({
  selector: 'app-tableauadmin',
  templateUrl: './tableauadmin.component.html',
  styleUrls: ['./tableauadmin.component.scss']
})
export class TableauadminComponent  implements OnInit{
  valeur: string = '';

  isChecked: boolean = false;

  constructor(private service:serviceAdmin){
    
  }
  @Input() admins!:Admin[];


 @Output() valueEmitted = new EventEmitter<Admin>();

  ngOnInit(): void {
  }
  delete(id?: number) {
    this.service.deleteadmin(id).pipe(
      tap(() => {
        const index = this.admins.findIndex((obj) => obj.id_admin === id);
  
        if (index !== -1) {
          this.admins.splice(index, 1);
        }
      })
    ).subscribe(e=>console.log(e),er=>alert(er));
  }
  update(admin:Admin) {
    this.service.setSharedData(admin);
    this.valueEmitted.emit(admin);

   
  }
  onSomeCondition() {
        // console.log('Le bouton radio est coché :',this.radioRef.nativeElement.value)
 
  }
  disponible(disp:string,admin:Admin,id?:number){

   let  x=""
    if(disp=="1"){
x="0";
    }
    else{
      x="1"
    }
    this.service.disactiveradmin(x,id!).pipe(tap(()=>{
      admin.dispo_admin=x;

    })).subscribe(e=>console.log(e),err=>console.log(err))


  }

  onValeurChange() {
    this.service.chercheradmin(this.valeur).pipe(
      tap((valeur) => this.admins = valeur) // Utilisez 'tap' pour affecter la valeur à la propriété 'admins'
    ).subscribe(e=>console.log(e),err=>console.log(err));
    
    // Faites des traitements supplémentaires en fonction de la nouvelle valeur ici
  }
}
