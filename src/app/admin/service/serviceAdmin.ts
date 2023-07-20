import { Injectable } from '@angular/core';
import { Admin } from '../model/admin';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import { apiUrl } from './api';

@Injectable({
  providedIn: 'root',
})
export class serviceAdmin {
  private sharedDataSubject: BehaviorSubject<Admin> = new BehaviorSubject<Admin>({nom_admin:'',
  prenom_admin: '',
  email_admin: '',
  numero_admin:0,
  url_img:"qwer",
  role_admin: '2',
  dispo_admin:"1",
  mdp: ''}
);
  private admins: Admin[] = [];

  constructor(private http: HttpClient) {}

  setSharedData(data: Admin) {
    this.sharedDataSubject.next(data);
  }

  getSharedData(): Observable<Admin> {
    return this.sharedDataSubject.asObservable();
  }

  getAdmin() : Observable<Admin[]>{
 
      return this.http.get<Admin[]>(`${apiUrl}/admin`);
     
    
  }

  addadmin(admin:Admin) :Observable<any>{
    return this.http.post<any>(`${apiUrl}/admin`,admin)

  }

  deleteadmin(id?:number):Observable<any>{
    return this.http.delete<any>(`${apiUrl}/admin/${id}`)
  }
  updateadmin(admin:Admin,id?:number) {

    return this.http.put<any>(`${apiUrl}/admin/${id}`,admin)

  }
  disactiveradmin(disactive:any,id:number) {
    return this.http.post<any>(`${apiUrl}/admin/disactiver/${id}`,{disactive})
  }


chercheradmin(prenom:string):Observable<Admin[]>{
  return this.http.get<Admin[]>(`${apiUrl}/admin//chercher?prenom=${prenom}`)
    
}

}
