import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauComponent } from './restau.component';

describe('RestauComponent', () => {
  let component: RestauComponent;
  let fixture: ComponentFixture<RestauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestauComponent]
    });
    fixture = TestBed.createComponent(RestauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
