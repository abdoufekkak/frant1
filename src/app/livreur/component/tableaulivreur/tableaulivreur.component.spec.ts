import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableaulivreurComponent } from './tableaulivreur.component';

describe('TableaulivreurComponent', () => {
  let component: TableaulivreurComponent;
  let fixture: ComponentFixture<TableaulivreurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableaulivreurComponent]
    });
    fixture = TestBed.createComponent(TableaulivreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
