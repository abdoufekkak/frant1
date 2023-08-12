import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { serviceLivreur } from '../../service/serviceLivreur';
import { Livreur } from '../../model/livreur';
import { tap } from 'rxjs';

@Component({
  selector: 'app-tab-livreur',
  templateUrl: './tab-livreur.component.html',
  styleUrls: ['./tab-livreur.component.scss']
})
export class TabLivreurComponent implements OnInit {

  valeur: string = '';

  isChecked: boolean = false;

  constructor(private service: serviceLivreur) {}
  @Input() livreurs!: Livreur[];

  @Output() valueEmitted = new EventEmitter<Livreur>();

  ngOnInit(): void {}
  delete(id?: number) {
    this.service
      .deleteLivreur(id)
      .pipe(
        tap(() => {
          const index = this.livreurs.findIndex((obj) => obj.id_livreur === id);
          if (index !== -1) {
            this.livreurs.splice(index, 1);
          }
        })
      )
      .subscribe(
        (e) => console.log(e),
        (er) => alert(er)
      );
  }
  update(livreur: Livreur) {
    this.service.setSharedData(livreur);
    // this.valueEmitted.emit(livreur);
  }
  onSomeCondition() {
    // console.log(
    //   'Le bouton radio est coché :',
    //   this.radioRef.nativeElement.value
    // );
  }
  disponible(disp: string, livreur: Livreur, id?: number) {
    let x = '';
    if (disp == '1') {
      x = '0';
    } else {
      x = '1';
    }
    this.service
      .disactiverLivreur(x, id!)
      .pipe(
        tap(() => {
          livreur.disponible = x;
        })
      )
      .subscribe(
        (e) => console.log(e),
        (err) => console.log(err)
      );
  }

  onValeurChange() {
    this.service
      .chercherLivreur(this.valeur)
      .pipe(
        tap((valeur) => (this.livreurs = valeur)) // Utilisez 'tap' pour affecter la valeur à la propriété 'admins'
      )
      .subscribe(
        (e) => console.log(e),
        (err) => console.log(err)
      );
  }
}
