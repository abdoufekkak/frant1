import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { serviceRestau } from '../../service/serviceResau';
import { Restau } from '../../model/Restau';
import {tap} from "rxjs"
@Component({
  selector: 'app-tab-restau',
  templateUrl: './tab-restau.component.html',
  styleUrls: ['./tab-restau.component.scss']
})
export class TabRestauComponent {
  valeur: string = '';

  isChecked: boolean = false;

  constructor(private service:serviceRestau){
    
  }
  @Input() restaus!:Restau[];


 @Output() valueEmitted = new EventEmitter<Restau>();

  ngOnInit(): void {
  }
  delete(id?: number) {
    this.service.deleterestau(id).pipe(
      tap(() => {
        const index = this.restaus.findIndex((obj) => obj.id_restau === id);
  
        if (index !== -1) {
          this.restaus.splice(index, 1);
        }
      })
    ).subscribe(e=>console.log(e),er=>alert(er));
  }
  update(restau:Restau) {
    this.service.setSharedData(restau);

   
  }

  disponible(restau:Restau){

   let  x=""
    if(restau.disponibilite=="1"){
x="0";
    }
    else{
      x="1"
    }
    this.service.disactiverrestau(x,restau.id_restau!).pipe(tap(()=>{
      restau.disponibilite=x;

    })).subscribe(e=>console.log(e),err=>console.log(err))


  }

  onValeurChange() {
    this.service.chercherrestau(this.valeur).pipe(
      tap((valeur) => this.restaus = [...valeur]) // Utilisez 'tap' pour affecter la valeur à la propriété 'admins'
    ).subscribe(e=>console.log(e),err=>console.log(err));
    
    // Faites des traitements supplémentaires en fonction de la nouvelle valeur ici
  }
}
