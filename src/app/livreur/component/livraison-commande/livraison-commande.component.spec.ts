import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivraisonCommandeComponent } from './livraison-commande.component';

describe('LivraisonCommandeComponent', () => {
  let component: LivraisonCommandeComponent;
  let fixture: ComponentFixture<LivraisonCommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivraisonCommandeComponent]
    });
    fixture = TestBed.createComponent(LivraisonCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
