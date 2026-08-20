import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComponentLifecycleComponent } from './component-lifecycle.component';

describe('ComponentLifecycleComponent', () => {
  let component: ComponentLifecycleComponent;
  let fixture: ComponentFixture<ComponentLifecycleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentLifecycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
