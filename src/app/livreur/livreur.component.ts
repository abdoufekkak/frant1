import { Component, OnInit } from '@angular/core';
import { serviceLivreur } from './service/serviceLivreur';
import { Livreur, commande_par_livreur } from './model/livreur';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.scss'],
})
export class LivreurComponent implements OnInit {
  livreurs!: Livreur[];
  livreur!: Livreur;
  commande_par_livreurs!:commande_par_livreur[]; 

  constructor(private service: serviceLivreur) {}
  ngOnInit(): void {
    this.service.getLivreur().subscribe(
      (data) => {console.log(data);  this.livreurs = data;},
      (err) => console.log(err)
    );

    this.service.chercherCommandeParJour().subscribe((data)=> this.commande_par_livreurs=data);
  }
  getValueFromChild(data: { livreur: Livreur; isBoolean: boolean }) {
    // const x: Admin = new Admin();
    //     x.id_admin=value.id_admin
    // x.nom_admin = value.nom_admin;
    // x.prenom_admin = value.prenom_admin;
    // x.email_admin = value.email_admin
    // x.numero_admin = value.numero_admin;
    // x.url_img =value.role_admin;
    // x.role_admin = value.role_admin;
    // x.dispo_admin =value.dispo_admin ;
    // x.mdp =  value.mdp;
    if (data.isBoolean) {
      let livreurss = [...this.livreurs];
      livreurss.push(data.livreur);
      this.livreurs = livreurss;
    } else {
      let livreurss = [...this.livreurs];

      const livreurTrouve = livreurss.find(
        (livreur) => livreur.id_livreur === data.livreur.id_livreur
      );
      if (livreurTrouve) {
        livreurTrouve.nom_livreur = data.livreur.nom_livreur;
        livreurTrouve.prenom = data.livreur.prenom;
        livreurTrouve.email = data.livreur.email;
        livreurTrouve.numero = data.livreur.numero;
        livreurTrouve.url_img = data.livreur.url_img;
        livreurTrouve.quota_fixe = data.livreur.quota_fixe;
        livreurTrouve.quota_km = data.livreur.quota_km;
        livreurTrouve.disponible = data.livreur.disponible;
        livreurTrouve.mdp = data.livreur.mdp;
        livreurTrouve.supp = data.livreur.supp;

        this.livreurs = livreurss;
      }
    }
  }
  getValueFromtable(value: Livreur) {
    this.livreur = value;
  }
  // getValueFromChild_mod(valeur: Livreur) {
  //   alert('xcv');
  // }
}
