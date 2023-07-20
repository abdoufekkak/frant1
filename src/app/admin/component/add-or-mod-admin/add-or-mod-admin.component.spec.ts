import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrModAdminComponent } from './add-or-mod-admin.component';

describe('AddOrModAdminComponent', () => {
  let component: AddOrModAdminComponent;
  let fixture: ComponentFixture<AddOrModAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrModAdminComponent]
    });
    fixture = TestBed.createComponent(AddOrModAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
