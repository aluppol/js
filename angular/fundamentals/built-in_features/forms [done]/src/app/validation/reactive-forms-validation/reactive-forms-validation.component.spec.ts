import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReactiveFormsValidationComponent } from './reactive-forms-validation.component';

describe('ReactiveFormsValidationComponent', () => {
  let component: ReactiveFormsValidationComponent;
  let fixture: ComponentFixture<ReactiveFormsValidationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
