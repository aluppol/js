import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InputWithOnchangeComponent } from './input-with-onchange.component';

describe('InputWithOnchangeComponent', () => {
  let component: InputWithOnchangeComponent;
  let fixture: ComponentFixture<InputWithOnchangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWithOnchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithOnchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
