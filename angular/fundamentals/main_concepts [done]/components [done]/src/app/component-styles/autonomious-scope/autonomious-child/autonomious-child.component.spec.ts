import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AutonomiousChildComponent } from './autonomious-child.component';

describe('AutonomiousChildComponent', () => {
  let component: AutonomiousChildComponent;
  let fixture: ComponentFixture<AutonomiousChildComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutonomiousChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutonomiousChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
