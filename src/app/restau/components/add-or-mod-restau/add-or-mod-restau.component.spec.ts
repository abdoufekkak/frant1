import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrModRestauComponent } from './add-or-mod-restau.component';

describe('AddOrModRestauComponent', () => {
  let component: AddOrModRestauComponent;
  let fixture: ComponentFixture<AddOrModRestauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrModRestauComponent]
    });
    fixture = TestBed.createComponent(AddOrModRestauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
