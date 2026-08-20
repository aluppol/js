import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RequestingDataComponent } from './requesting-data.component';

describe('RequestingDataComponent', () => {
  let component: RequestingDataComponent;
  let fixture: ComponentFixture<RequestingDataComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
