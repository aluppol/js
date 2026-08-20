import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AlexComponent } from './alex.component';

describe('AlexComponent', () => {
  let component: AlexComponent;
  let fixture: ComponentFixture<AlexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
