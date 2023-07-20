import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLivreurComponent } from './tab-livreur.component';

describe('TabLivreurComponent', () => {
  let component: TabLivreurComponent;
  let fixture: ComponentFixture<TabLivreurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabLivreurComponent]
    });
    fixture = TestBed.createComponent(TabLivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
