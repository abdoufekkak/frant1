import { Component, Input } from '@angular/core';
import { commande_par_livreur } from '../../model/livreur';
import { serviceLivreur } from '../../service/serviceLivreur';
import { tap } from 'rxjs';

@Component({
  selector: 'app-livraison-commande',
  templateUrl: './livraison-commande.component.html',
  styleUrls: ['./livraison-commande.component.scss']
})
export class LivraisonCommandeComponent {
 @Input() commande_par_livreurs!:commande_par_livreur[];
 valeur: Date =new Date();

 constructor(private service:serviceLivreur){
 }
 pinalise(id_livreur:number){
this.service.pinaliser(id_livreur).subscribe(date=>window.alert("cette livreur pinalise"))
 }

 onValeurChange() {
  this.service
    .chercherCommandeParJour(this.valeur)
    .pipe(
      tap((valeur) => (this.commande_par_livreurs = valeur)) // Utilisez 'tap' pour affecter la valeur à la propriété 'admins'
    )
    .subscribe(
      (e) => console.log(e),
      (err) => console.log(err)
    );
}
}
