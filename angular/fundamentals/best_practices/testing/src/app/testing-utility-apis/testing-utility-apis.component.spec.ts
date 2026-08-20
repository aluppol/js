import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestingUtilityApisComponent } from './testing-utility-apis.component';

describe('TestingUtilityApisComponent', () => {
  let component: TestingUtilityApisComponent;
  let fixture: ComponentFixture<TestingUtilityApisComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingUtilityApisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingUtilityApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
