import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrModVilleComponent } from './add-or-mod-ville.component';

describe('AddOrModVilleComponent', () => {
  let component: AddOrModVilleComponent;
  let fixture: ComponentFixture<AddOrModVilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrModVilleComponent]
    });
    fixture = TestBed.createComponent(AddOrModVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
