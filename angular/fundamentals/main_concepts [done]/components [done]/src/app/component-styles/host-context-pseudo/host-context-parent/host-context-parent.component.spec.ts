import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HostContextParentComponent } from './host-context-parent.component';

describe('HostContextParentComponent', () => {
  let component: HostContextParentComponent;
  let fixture: ComponentFixture<HostContextParentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HostContextParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostContextParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
