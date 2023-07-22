import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauCalculeComponent } from './tableau-calcule.component';

describe('TableauCalculeComponent', () => {
  let component: TableauCalculeComponent;
  let fixture: ComponentFixture<TableauCalculeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableauCalculeComponent]
    });
    fixture = TestBed.createComponent(TableauCalculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
