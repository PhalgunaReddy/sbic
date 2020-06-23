import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportuserComponent } from './transportuser.component';

describe('TransportuserComponent', () => {
  let component: TransportuserComponent;
  let fixture: ComponentFixture<TransportuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
