import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AliceComponent } from './alice.component';

describe('AliceComponent', () => {
  let component: AliceComponent;
  let fixture: ComponentFixture<AliceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
