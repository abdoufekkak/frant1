import { Component } from '@angular/core';
import { serviceProduit } from './service/serciceProduit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss'],
})
export class ProduitComponent {
  constructor(private service: serviceProduit) {}
  ngOnInit(): void {}
}
