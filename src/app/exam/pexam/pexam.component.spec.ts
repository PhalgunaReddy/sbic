import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PexamComponent } from './pexam.component';

describe('PexamComponent', () => {
  let component: PexamComponent;
  let fixture: ComponentFixture<PexamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
