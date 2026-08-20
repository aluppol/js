import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccessingQueryParamsComponent } from './accessing-query-params.component';

describe('AccessingQueryParamsComponent', () => {
  let component: AccessingQueryParamsComponent;
  let fixture: ComponentFixture<AccessingQueryParamsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessingQueryParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessingQueryParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
