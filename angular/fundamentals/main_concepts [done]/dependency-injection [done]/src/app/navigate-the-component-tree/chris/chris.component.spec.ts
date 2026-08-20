import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChrisComponent } from './chris.component';

describe('ChrisComponent', () => {
  let component: ChrisComponent;
  let fixture: ComponentFixture<ChrisComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
