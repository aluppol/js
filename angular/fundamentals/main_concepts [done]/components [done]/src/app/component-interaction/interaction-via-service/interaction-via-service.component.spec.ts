import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InteractionViaServiceComponent } from './interaction-via-service.component';

describe('InteractionViaServiceComponent', () => {
  let component: InteractionViaServiceComponent;
  let fixture: ComponentFixture<InteractionViaServiceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionViaServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionViaServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
