import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HierarchyChildCheckComponent } from './hierarchy-child-check.component';

describe('HierarchyChildCheckComponent', () => {
  let component: HierarchyChildCheckComponent;
  let fixture: ComponentFixture<HierarchyChildCheckComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HierarchyChildCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchyChildCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
