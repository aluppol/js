import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarolComponent } from './carol.component';

describe('CarolComponent', () => {
  let component: CarolComponent;
  let fixture: ComponentFixture<CarolComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
