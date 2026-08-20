import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HostPseudoComponent } from './host-pseudo.component';

describe('HostPseudoComponent', () => {
  let component: HostPseudoComponent;
  let fixture: ComponentFixture<HostPseudoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HostPseudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostPseudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
