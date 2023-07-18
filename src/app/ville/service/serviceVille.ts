import { Injectable } from '@angular/core';
import { Ville} from '../model/ville';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class serviceVille {
  private admins: Ville[] = [];

  constructor(private http: HttpClient) {}

  getVille(): Ville[] {
    return []
  }

  addVille(){
  }

 deletVille(){
}
updateVille(){

}
}