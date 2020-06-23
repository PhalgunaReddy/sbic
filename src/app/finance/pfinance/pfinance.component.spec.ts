import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PfinanceComponent } from './pfinance.component';

describe('PfinanceComponent', () => {
  let component: PfinanceComponent;
  let fixture: ComponentFixture<PfinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
