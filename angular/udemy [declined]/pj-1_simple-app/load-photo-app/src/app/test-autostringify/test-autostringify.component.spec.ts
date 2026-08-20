import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestAutostringifyComponent } from './test-autostringify.component';

describe('TestAutostringifyComponent', () => {
  let component: TestAutostringifyComponent;
  let fixture: ComponentFixture<TestAutostringifyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAutostringifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAutostringifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
