import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livreur } from '../model/livreur';

@Injectable({
  providedIn: 'root',
})
export class serviceLivreur {
  private admins: Livreur[] = [];

  constructor(private http: HttpClient) {}

  getLivreur(): Livreur[] {
    return [];
  }

  addLivreur() {}

  deleteLivreur() {}
  updateLivreur() {}
  disactiverLivreur() {}
}
