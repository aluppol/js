import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InteractionChildCustomComponent } from './interaction-child-custom.component';

describe('InteractionChildCustomComponent', () => {
  let component: InteractionChildCustomComponent;
  let fixture: ComponentFixture<InteractionChildCustomComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionChildCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionChildCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
