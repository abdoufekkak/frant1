import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class serviceAdmin {
  private admins: Admin[] = [];

  constructor(private http: HttpClient) {}

  getAdmin(): Admin[] {
    return [];
  }

  addadmin(){
  }


  deleteadmin() {}
  updateadmin() {}
  disactiveradmin() {}
}

chercheradmin(){
    
}

}
