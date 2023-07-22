import { Component, OnInit } from '@angular/core';
import { Dashbord } from './model/dashbord';
import { serviceDashbord } from './service/serviceDashbord';
import { Calcule } from './components/calcule/model/calcule';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {


  dashbors!:Dashbord[];

constructor(private service :serviceDashbord){

}

  ngOnInit(): void { 
    this.service.getDashbord().subscribe(data=>this.dashbors=data,err=>console.log(err));

  }
}
