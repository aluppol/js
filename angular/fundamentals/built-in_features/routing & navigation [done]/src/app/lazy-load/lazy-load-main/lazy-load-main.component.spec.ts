import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LazyLoadMainComponent } from './lazy-load-main.component';

describe('LazyLoadMainComponent', () => {
  let component: LazyLoadMainComponent;
  let fixture: ComponentFixture<LazyLoadMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
