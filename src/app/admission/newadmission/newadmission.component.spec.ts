import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewadmissionComponent } from './newadmission.component';

describe('NewadmissionComponent', () => {
  let component: NewadmissionComponent;
  let fixture: ComponentFixture<NewadmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewadmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
