import { Injectable } from '@angular/core';
import { Ville } from '../model/ville';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class serviceVille {
  private Ville: Ville[] = [];

  constructor(private http: HttpClient) {}

  getVille(): Ville[] {
    return []
  }

  addVille(){
  }

 deleteVille(){
}
updateVille(){

}
disactiverVille(){

}

}