import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TemplateRefVarsComponent } from './template-ref-vars.component';

describe('TemplateRefVarsComponent', () => {
  let component: TemplateRefVarsComponent;
  let fixture: ComponentFixture<TemplateRefVarsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateRefVarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateRefVarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
