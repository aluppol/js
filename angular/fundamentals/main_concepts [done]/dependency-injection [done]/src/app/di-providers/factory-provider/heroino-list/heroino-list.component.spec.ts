import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeroinoListComponent } from './heroino-list.component';

describe('HeroinoListComponent', () => {
  let component: HeroinoListComponent;
  let fixture: ComponentFixture<HeroinoListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroinoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroinoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
