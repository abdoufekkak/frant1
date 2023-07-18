import { Injectable } from '@angular/core';
import { Produit } from '../model/produit';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class serviceProduit {
  private admins: Produit[] = [];

  constructor(private http: HttpClient) {}

  getProduit(): Produit[] {
    return [];
  }

  addProduit() {}

  deleteProduit() {}
  updateProduit() {}
  disactiverProduit() {}
}
