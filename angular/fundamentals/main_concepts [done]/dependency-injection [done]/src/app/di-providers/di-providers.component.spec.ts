import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DiProvidersComponent } from './di-providers.component';

describe('DiProvidersComponent', () => {
  let component: DiProvidersComponent;
  let fixture: ComponentFixture<DiProvidersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DiProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
