import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrModLivreurComponent } from './add-or-mod-livreur.component';

describe('AddOrModLivreurComponent', () => {
  let component: AddOrModLivreurComponent;
  let fixture: ComponentFixture<AddOrModLivreurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrModLivreurComponent]
    });
    fixture = TestBed.createComponent(AddOrModLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
