import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabVilleComponent } from './tab-ville.component';

describe('TabVilleComponent', () => {
  let component: TabVilleComponent;
  let fixture: ComponentFixture<TabVilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabVilleComponent]
    });
    fixture = TestBed.createComponent(TabVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
