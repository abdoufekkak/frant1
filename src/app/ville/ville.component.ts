import { Component, OnInit } from '@angular/core';
import { serviceVille } from './service/serviceVille';
import { Ville } from './model/ville';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.scss']
})
export class VilleComponent implements OnInit{
  villes!:Ville[];

    
constructor(private service :serviceVille){

}
  ngOnInit(): void { 
      this.service.getville().subscribe(data=>this.villes=data,err=>console.log(err));
    }

    getValueFromChild(valeur:Ville){
     const x= [...this.villes];
     x.push(valeur);
      this.villes=x;

    }
}
