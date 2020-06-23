import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtransportComponent } from './ptransport.component';

describe('PtransportComponent', () => {
  let component: PtransportComponent;
  let fixture: ComponentFixture<PtransportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtransportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
