import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InteractionParentComponent } from './interaction-parent.component';

describe('InteractionParentComponent', () => {
  let component: InteractionParentComponent;
  let fixture: ComponentFixture<InteractionParentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
