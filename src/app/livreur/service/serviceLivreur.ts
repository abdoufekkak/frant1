import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livreur, commande_par_livreur } from '../model/livreur';
import { apiUrl } from 'src/app/admin/service/api';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class serviceLivreur {
  private livreurs: Livreur[] = [];
  private sharedDataSubject: BehaviorSubject<Livreur> =
    new BehaviorSubject<Livreur>({
      nom_livreur: '',
      prenom: '',
      id_ville: 1,
      email: '',
      url_img: 'qwer',
      numero: 0,
      quota_fixe: 2,
      quota_km: 3,
      disponible: '1',
      nom_ville: 'f',
      mdp: '',
      supp: 0,
    });
  constructor(private http: HttpClient) {}

  setSharedData(data: Livreur) {
    this.sharedDataSubject.next(data);
  }

  getSharedData(): Observable<Livreur> {
    return this.sharedDataSubject.asObservable();
  }
  getLivreur(): Observable<Livreur[]> {
    return this.http.get<Livreur[]>(`${apiUrl}/livreur`);
  }

  addLivreur(livreur: Livreur): Observable<any> {
    return this.http.post<any>(`${apiUrl}/livreur`, livreur);
  }

  deleteLivreur(id?: number): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/livreur/${id}`);
  }
  updateLivreur(livreur: Livreur, id?: number) {
    return this.http.put<any>(`${apiUrl}/livreur/${id}`, livreur);
  }
  disactiverLivreur(disactive: any, id: number) {
    return this.http.post<any>(`${apiUrl}/livreur/disactiver/${id}`, {
      disactive,
    });
  }

  chercherLivreur(nom_livreur: string): Observable<Livreur[]> {
    return this.http.get<Livreur[]>(
      `${apiUrl}/livreur//chercher?nom_livreur=${nom_livreur}`
    );
  }

  chercherCommandeParJour(jour?: Date): Observable<commande_par_livreur[]> {
    return this.http.get<commande_par_livreur[]>(
      `${apiUrl}/`
    );  
  }
  pinaliser(id_livreur:number): Observable<any>{
    return this.http.get<any>(`${apiUrl}/${id_livreur}`);

  }
}