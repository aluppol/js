import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HostPseudoSiblingComponent } from './host-pseudo-sibling.component';

describe('HostPseudoSiblingComponent', () => {
  let component: HostPseudoSiblingComponent;
  let fixture: ComponentFixture<HostPseudoSiblingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HostPseudoSiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostPseudoSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
