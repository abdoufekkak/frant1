import { Component,Input,OnInit } from '@angular/core';
import { serviceVille } from '../../service/serviceVille';
import { Ville } from '../../model/ville';
import {tap} from "rxjs"
@Component({
  selector: 'app-tab-ville',
  templateUrl: './tab-ville.component.html',
  styleUrls: ['./tab-ville.component.scss']
})
export class TabVilleComponent implements OnInit {

  valeur: string = '';

  isChecked: boolean = false;

  constructor(private service:serviceVille){
    
  }
  @Input() villes!:Ville[];



//  @Output() valueEmitted = new EventEmitter<Admin>();

  ngOnInit(): void {
  }
  delete(id?: number) {
    this.service.deleteville(id).pipe(
      tap(() => {
        const index = this.villes.findIndex((obj) => obj.id_ville === id);
  
        if (index !== -1) {
          this.villes.splice(index, 1);
        }
      })
    ).subscribe(e=>console.log(e),er=>alert(er));
  }



  onValeurChange() {
    this.service.chercherville(this.valeur).pipe(
      tap((valeur) => this.villes = [...valeur]) // Utilisez 'tap' pour affecter la valeur à la propriété 'admins'
    ).subscribe(e=>console.log(e),err=>console.log(err));
    
    // Faites des traitements supplémentaires en fonction de la nouvelle valeur ici
  }
}
