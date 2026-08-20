import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AliasedClassComponent } from './aliased-class.component';

describe('AliasedClassComponent', () => {
  let component: AliasedClassComponent;
  let fixture: ComponentFixture<AliasedClassComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AliasedClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliasedClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
