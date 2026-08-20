import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CodeCoverageComponent } from './code-coverage.component';

describe('CodeCoverageComponent', () => {
  let component: CodeCoverageComponent;
  let fixture: ComponentFixture<CodeCoverageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeCoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
