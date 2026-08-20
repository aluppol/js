import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChildHostComponent } from './child-host.component';

describe('ChildHostComponent', () => {
  let component: ChildHostComponent;
  let fixture: ComponentFixture<ChildHostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
