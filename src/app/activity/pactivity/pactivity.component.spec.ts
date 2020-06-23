import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PactivityComponent } from './pactivity.component';

describe('PactivityComponent', () => {
  let component: PactivityComponent;
  let fixture: ComponentFixture<PactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
