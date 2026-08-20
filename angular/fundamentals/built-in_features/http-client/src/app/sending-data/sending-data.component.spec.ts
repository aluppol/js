import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SendingDataComponent } from './sending-data.component';

describe('SendingDataComponent', () => {
  let component: SendingDataComponent;
  let fixture: ComponentFixture<SendingDataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SendingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
