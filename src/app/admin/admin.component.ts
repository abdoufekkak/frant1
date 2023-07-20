import { Component, OnInit } from '@angular/core';
import { serviceAdmin } from './service/serviceAdmin';
import { Admin } from './model/admin';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  admins!:Admin[];
  admin!:Admin;
constructor(private service :serviceAdmin){

}
  ngOnInit(): void { 
    this.service.getAdmin().subscribe(data=>this.admins=data,err=>console.log(err));
    
  }

  getValueFromChild(value: Admin) {
    this.admins.push(value)
  }

  getValueFromtable(value:Admin){
   this.admin=value;
  }
}
