import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultipleEditSessionComponent } from './multiple-edit-session.component';

describe('MultipleEditSessionComponent', () => {
  let component: MultipleEditSessionComponent;
  let fixture: ComponentFixture<MultipleEditSessionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleEditSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleEditSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
