import { Injectable } from '@angular/core';
import { Restau } from '../model/Restau';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs"
import { apiUrl } from 'src/app/admin/service/api';
import {BehaviorSubject} from "rxjs"
@Injectable({
  providedIn: 'root',
})
export class serviceRestau {

  private sharedDataSubject: BehaviorSubject<Restau> = new BehaviorSubject<Restau>( {id_restau:-1,
    nom_restau:'',
    ville_restau: '',
    tarif: 0,
    contact:"",
    disponibilite:"d",
    email: '2',
    logo:"1",
  mdp: ''}
);

setSharedData(data: Restau) {
  this.sharedDataSubject.next(data);
}

getSharedData(): Observable<Restau> {
  return this.sharedDataSubject.asObservable();
}
  constructor(private http: HttpClient) {}

  getrestau() : Observable<Restau[]>{
 
    return this.http.get<Restau[]>(`${apiUrl}/resteu`);
   
  
}

addrestau(admin:Restau) :Observable<any>{
  return this.http.post<any>(`${apiUrl}/resteu`,admin)

}

deleterestau(id?:number):Observable<any>{
  return this.http.delete<any>(`${apiUrl}/resteu/${id}`)
}
updaterestau(admin:Restau,id?:number) {

  return this.http.put<any>(`${apiUrl}/resteu/${id}`,admin)

}
disactiverrestau(disactive:any,id:number) {
  return this.http.post<any>(`${apiUrl}/resteu/disactiver/${id}`,{disactive})
}


chercherrestau(nom_restau:string):Observable<Restau[]>{
return this.http.get<Restau[]>(`${apiUrl}/resteu/chercher?nom_restau=${nom_restau}`)
  
}

}