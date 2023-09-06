export class Livreur {
  id_livreur?: number;
  nom_livreur!: string;
  prenom!: string;
  id_ville!: number;
  nom_ville!: string;
  email!: string;
  url_img!: string;
  numero!: number;
  quota_fixe!: number;
  quota_km!: number;
  disponible!: string;
  mdp!: string;
  supp!: number;
}

export class commande_par_livreur {
  id_livreur!: number;
  nom_livreur!: string;
  numero!:number;
  panies!:any[]; //image des recus ,date


}