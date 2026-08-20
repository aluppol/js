import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JinnyChildComponent } from './jinny-child.component';

describe('JinnyChildComponent', () => {
  let component: JinnyChildComponent;
  let fixture: ComponentFixture<JinnyChildComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JinnyChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JinnyChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
