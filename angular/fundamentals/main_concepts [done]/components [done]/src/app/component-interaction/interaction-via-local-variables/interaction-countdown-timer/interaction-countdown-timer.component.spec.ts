import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InteractionCountdownTimerComponent } from './interaction-countdown-timer.component';

describe('InteractionCountdownTimerComponent', () => {
  let component: InteractionCountdownTimerComponent;
  let fixture: ComponentFixture<InteractionCountdownTimerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionCountdownTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionCountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
