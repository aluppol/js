import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AngularDependencyInjectionComponent } from './angular-dependency-injection.component';

describe('AngularDependencyInjectionComponent', () => {
  let component: AngularDependencyInjectionComponent;
  let fixture: ComponentFixture<AngularDependencyInjectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDependencyInjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDependencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
