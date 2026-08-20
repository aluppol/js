import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BobComponent } from './bob.component';

describe('BobComponent', () => {
  let component: BobComponent;
  let fixture: ComponentFixture<BobComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
