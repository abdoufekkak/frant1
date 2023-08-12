import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Livreur } from '../../model/livreur';
import { Subscription, tap } from 'rxjs';
import { Ville } from 'src/app/ville/model/ville';
import { serviceLivreur } from '../../service/serviceLivreur';
import { serviceVille } from 'src/app/ville/service/serviceVille';

@Component({
  selector: 'app-add-or-mod-livreur',
  templateUrl: './add-or-mod-livreur.component.html',
  styleUrls: ['./add-or-mod-livreur.component.scss']
})
export class AddOrModLivreurComponent implements OnInit {

  sharedData!: Livreur;
  private subscription!: Subscription;
  button_!: string;
  villes!: Ville[];

  @Output() valueEmitted = new EventEmitter<{
    livreur: Livreur;
    isBoolean: boolean;
  }>();

  constructor(private service: serviceLivreur, private servic: serviceVille) {
    this.subscription = this.service
      .getSharedData()
      .pipe()
      .subscribe((data) => {
        console.log(data)
        this.sharedData = data;
        this.livreur.nom_livreur = data.nom_livreur;
        this.livreur.prenom = data.prenom;
        this.livreur.email = data.email;
        this.livreur.url_img = data.url_img;
        this.livreur.quota_fixe = data.quota_fixe;
        this.livreur.quota_km = data.quota_km;
        this.livreur.disponible = data.disponible;
        this.livreur.mdp = data.mdp;
        this.livreur.id_livreur = data.id_livreur;
        this.button_ = 'update';
      });
  }

  livreur: Livreur = {
    id_livreur: -1,
    nom_livreur: '',
    prenom: '',
    email: '',
    id_ville: 3,
    nom_ville: '',
    numero: 0,
    url_img: 'qwer',
    quota_fixe: 2,
    quota_km: 1,
    disponible: '0',
    mdp: '',
    supp: 1,
  };

 
  ngOnInit(): void {
    this.button_ = 'envoyer';
    this.servic.getville().subscribe(
      (e) => (this.villes = e),
      (error) => console.log(error)
    );
  }
  onSubmit() {
    if (this.button_ == 'envoyer') {
      this.service
        .addLivreur(this.livreur)
        .pipe(
          tap((value) => {
            this.valueEmitted.emit({ livreur: value, isBoolean: true });
          })
        )
        .subscribe((e) => console.log(e, 'new livreur'));
    } else {
      this.service
        .updateLivreur(this.livreur, this.livreur.id_livreur)
        .pipe(
          tap((value) => {
            this.valueEmitted.emit({ livreur: value, isBoolean: false });
          })
        )
        .subscribe((e) => console.log(e, 'new livreur'));
    }
  }
  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
