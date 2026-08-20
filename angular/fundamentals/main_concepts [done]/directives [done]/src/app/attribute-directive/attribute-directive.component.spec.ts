import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AttributeDirectiveComponent } from './attribute-directive.component';

describe('AttributeDirectiveComponent', () => {
  let component: AttributeDirectiveComponent;
  let fixture: ComponentFixture<AttributeDirectiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
