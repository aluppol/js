import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InteractionSetterParentComponent } from './interaction-setter-parent.component';

describe('InteractionSetterParentComponent', () => {
  let component: InteractionSetterParentComponent;
  let fixture: ComponentFixture<InteractionSetterParentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionSetterParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionSetterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
