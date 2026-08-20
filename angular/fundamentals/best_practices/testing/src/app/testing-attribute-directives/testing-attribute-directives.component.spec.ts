import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestingAttributeDirectivesComponent } from './testing-attribute-directives.component';

describe('TestingAttributeDirectivesComponent', () => {
  let component: TestingAttributeDirectivesComponent;
  let fixture: ComponentFixture<TestingAttributeDirectivesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingAttributeDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingAttributeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
