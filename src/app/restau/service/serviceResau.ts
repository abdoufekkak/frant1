import { Injectable } from '@angular/core';
import { Restau } from '../model/Restau';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class serviceRestau {
  private admins: Restau[] = [];

  constructor(private http: HttpClient) {}

  getRestau(): Restau[] {
    return []
  }
  addRestau(){
  }

 deleteRestau(){
}
updateRestau(){
}
disactiverRestau(){

}

chercherRestau(){

}
}