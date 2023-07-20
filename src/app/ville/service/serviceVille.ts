import { Injectable } from '@angular/core';
import { Ville } from '../model/ville';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import { apiUrl } from 'src/app/admin/service/api';

@Injectable({
  providedIn: 'root',
})
export class serviceVille {
  private Ville: Ville[] = [];

  constructor(private http: HttpClient) {}


  getville() : Observable<Ville[]>{

    return this.http.get<Ville[]>(`${apiUrl}/ville`);
  
}


addville(ville:Ville) :Observable<any>{
  return this.http.post<any>(`${apiUrl}/ville`,ville)

}

deleteville(id?:number):Observable<any>{
  return this.http.delete<any>(`${apiUrl}/ville/${id}`)
}

chercherville(nom_ville:string):Observable<any>{
  return this.http.get<any>(`${apiUrl}/ville/chercher?nom_ville=${nom_ville}`)
}

}