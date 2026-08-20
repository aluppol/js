import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InterceptorsComponent } from './interceptors.component';

describe('InterceptorsComponent', () => {
  let component: InterceptorsComponent;
  let fixture: ComponentFixture<InterceptorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
