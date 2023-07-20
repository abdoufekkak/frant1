import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauadminComponent } from './tableauadmin.component';

describe('TableauadminComponent', () => {
  let component: TableauadminComponent;
  let fixture: ComponentFixture<TableauadminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableauadminComponent]
    });
    fixture = TestBed.createComponent(TableauadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
