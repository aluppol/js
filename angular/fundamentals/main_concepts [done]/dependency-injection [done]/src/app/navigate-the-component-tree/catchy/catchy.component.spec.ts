import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CatchyComponent } from './catchy.component';

describe('CatchyComponent', () => {
  let component: CatchyComponent;
  let fixture: ComponentFixture<CatchyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CatchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
