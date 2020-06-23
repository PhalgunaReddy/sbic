import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaypaymentComponent } from './todaypayment.component';

describe('TodaypaymentComponent', () => {
  let component: TodaypaymentComponent;
  let fixture: ComponentFixture<TodaypaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaypaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaypaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
