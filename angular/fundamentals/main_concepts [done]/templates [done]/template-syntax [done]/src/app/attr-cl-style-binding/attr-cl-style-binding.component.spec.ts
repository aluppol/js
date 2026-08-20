import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AttrClStyleBindingComponent } from './attr-cl-style-binding.component';

describe('AttrClStyleBindingComponent', () => {
  let component: AttrClStyleBindingComponent;
  let fixture: ComponentFixture<AttrClStyleBindingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AttrClStyleBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttrClStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
