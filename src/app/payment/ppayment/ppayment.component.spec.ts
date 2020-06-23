import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpaymentComponent } from './ppayment.component';

describe('PpaymentComponent', () => {
  let component: PpaymentComponent;
  let fixture: ComponentFixture<PpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
