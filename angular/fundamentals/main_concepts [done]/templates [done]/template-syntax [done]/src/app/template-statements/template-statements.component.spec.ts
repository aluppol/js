import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TemplateStatementsComponent } from './template-statements.component';

describe('TemplateStatementsComponent', () => {
  let component: TemplateStatementsComponent;
  let fixture: ComponentFixture<TemplateStatementsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateStatementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
