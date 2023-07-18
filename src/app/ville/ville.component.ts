import { Component, OnInit } from '@angular/core';
import { serviceVille } from './service/serviceVille';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.scss']
})
export class VilleComponent implements OnInit{

    
constructor(private service :serviceVille){

}
  ngOnInit(): void { 
  }

}
