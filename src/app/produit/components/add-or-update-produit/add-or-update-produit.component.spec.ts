import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateProduitComponent } from './add-or-update-produit.component';

describe('AddOrUpdateProduitComponent', () => {
  let component: AddOrUpdateProduitComponent;
  let fixture: ComponentFixture<AddOrUpdateProduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrUpdateProduitComponent]
    });
    fixture = TestBed.createComponent(AddOrUpdateProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
