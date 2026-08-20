import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DebuggingTestsComponent } from './debugging-tests.component';

describe('DebuggingTestsComponent', () => {
  let component: DebuggingTestsComponent;
  let fixture: ComponentFixture<DebuggingTestsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DebuggingTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebuggingTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
