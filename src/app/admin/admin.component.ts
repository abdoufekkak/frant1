import { Component, OnInit } from '@angular/core';
import { serviceAdmin } from './service/serviceAdmin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  
constructor(private service :serviceAdmin){

}
  ngOnInit(): void { 
  }

}
