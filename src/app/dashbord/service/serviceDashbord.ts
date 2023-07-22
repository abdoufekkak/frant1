import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import { apiUrl } from 'src/app/admin/service/api';
import { Dashbord } from '../model/dashbord';

@Injectable({
  providedIn: 'root',
})
export class serviceDashbord {

  private dashbord: Dashbord[] = [];

  constructor(private http: HttpClient) {}




  getDashbord(datedebut?:Date,datefin?:Date) : Observable<Dashbord[]>{
    if(datedebut &&datefin) {
        return this.http.get<Dashbord[]>(`${apiUrl}/commande?datedebut=${datedebut}&datefin=${datefin}`);
    }
    else{
        return this.http.get<Dashbord[]>(`${apiUrl}/commande`);

    }
  }

  getcalcule() :Observable<any>{

    return this.http.get<any>(`${apiUrl}/commande/calculer`)

  }

credit(id:number){
    return this.http.get<any>(`${apiUrl}/commande/credit/${id}`)
}

}
