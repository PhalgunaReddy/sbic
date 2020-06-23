import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PstaffComponent } from './pstaff.component';

describe('PstaffComponent', () => {
  let component: PstaffComponent;
  let fixture: ComponentFixture<PstaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PstaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
