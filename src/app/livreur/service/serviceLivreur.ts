import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livreur } from '../model/livreur';
import { apiUrl } from 'src/app/admin/service/api';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class serviceLivreur {
  private livreurs: Livreur[] = [];
  private sharedDataSubject: BehaviorSubject<Livreur> =
    new BehaviorSubject<Livreur>({
      nom: '',
      prenom: '',
      email: '',
      id_ville: 1,
      numero: 0,
      url_img: 'qwer',
      quota_fixe: 2,
      quota_km: 3,
      disponible: '1',
      mdp: '',
      supp: 0,
    });
  constructor(private http: HttpClient) {}

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

  chercheradmin(nom: string): Observable<Livreur[]> {
    return this.http.get<Livreur[]>(`${apiUrl}/livreur//chercher?nom=${nom}`);
  }
}
