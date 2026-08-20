import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParentHostComponent } from './parent-host.component';

describe('ParentHostComponent', () => {
  let component: ParentHostComponent;
  let fixture: ComponentFixture<ParentHostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
