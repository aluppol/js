import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InteractionViaLocalVariablesComponent } from './interaction-via-local-variables.component';

describe('InteractionViaLocalVariablesComponent', () => {
  let component: InteractionViaLocalVariablesComponent;
  let fixture: ComponentFixture<InteractionViaLocalVariablesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionViaLocalVariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionViaLocalVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
