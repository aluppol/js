import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FactoryProviderComponent } from './factory-provider.component';

describe('FactoryProviderComponent', () => {
  let component: FactoryProviderComponent;
  let fixture: ComponentFixture<FactoryProviderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FactoryProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
