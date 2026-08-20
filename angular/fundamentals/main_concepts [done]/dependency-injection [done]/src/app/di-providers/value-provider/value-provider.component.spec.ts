import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ValueProviderComponent } from './value-provider.component';

describe('ValueProviderComponent', () => {
  let component: ValueProviderComponent;
  let fixture: ComponentFixture<ValueProviderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
