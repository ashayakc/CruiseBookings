import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesUnitListComponent } from './sales-unit-list.component';

describe('SalesUnitListComponent', () => {
  let component: SalesUnitListComponent;
  let fixture: ComponentFixture<SalesUnitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesUnitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesUnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
