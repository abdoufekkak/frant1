import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabRestauComponent } from './tab-restau.component';

describe('TabRestauComponent', () => {
  let component: TabRestauComponent;
  let fixture: ComponentFixture<TabRestauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabRestauComponent]
    });
    fixture = TestBed.createComponent(TabRestauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
