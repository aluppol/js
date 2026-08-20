import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParentListenChildChildComponent } from './parent-listen-child-child.component';

describe('ParentListenChildChildComponent', () => {
  let component: ParentListenChildChildComponent;
  let fixture: ComponentFixture<ParentListenChildChildComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentListenChildChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentListenChildChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
