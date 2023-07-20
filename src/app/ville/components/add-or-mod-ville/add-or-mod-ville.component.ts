import { Component,EventEmitter,Output } from '@angular/core';
import { Ville } from '../../model/ville';
import { serviceVille } from '../../service/serviceVille';
import {tap} from "rxjs"
@Component({
  selector: 'app-add-or-mod-ville',
  templateUrl: './add-or-mod-ville.component.html',
  styleUrls: ['./add-or-mod-ville.component.scss']
})
export class AddOrModVilleComponent {
  @Output() valueEmitted = new EventEmitter< Ville >();

  constructor(private service:serviceVille){

  }
  
  ville:Ville={
    id_ville:-1,
    nom_ville:'',
    supp:0
};

  onSubmit(){
      this.service.addville(this.ville).pipe(tap((value)=>{
        this.valueEmitted.emit(value);
      })).subscribe(e=>console.log(e,"new admin"))
 
  }
}
