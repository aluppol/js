import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BuiltInDirectivesComponent } from './built-in-directives.component';

describe('BuiltInDirectivesComponent', () => {
  let component: BuiltInDirectivesComponent;
  let fixture: ComponentFixture<BuiltInDirectivesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltInDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltInDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
