import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadmissionComponent } from './padmission.component';

describe('PadmissionComponent', () => {
  let component: PadmissionComponent;
  let fixture: ComponentFixture<PadmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
