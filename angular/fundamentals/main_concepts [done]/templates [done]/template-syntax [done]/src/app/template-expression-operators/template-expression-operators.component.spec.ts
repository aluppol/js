import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TemplateExpressionOperatorsComponent } from './template-expression-operators.component';

describe('TemplateExpressionOperatorsComponent', () => {
  let component: TemplateExpressionOperatorsComponent;
  let fixture: ComponentFixture<TemplateExpressionOperatorsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateExpressionOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateExpressionOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
