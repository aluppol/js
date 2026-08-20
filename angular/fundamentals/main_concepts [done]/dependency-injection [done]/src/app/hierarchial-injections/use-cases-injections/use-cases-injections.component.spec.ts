import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UseCasesInjectionsComponent } from './use-cases-injections.component';

describe('UseCasesInjectionsComponent', () => {
  let component: UseCasesInjectionsComponent;
  let fixture: ComponentFixture<UseCasesInjectionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UseCasesInjectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCasesInjectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
