import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SizerComponent } from './sizer.component';

describe('SizerComponent', () => {
  let component: SizerComponent;
  let fixture: ComponentFixture<SizerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
