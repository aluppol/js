import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NavigateTheComponentTreeComponent } from './navigate-the-component-tree.component';

describe('NavigateTheComponentTreeComponent', () => {
  let component: NavigateTheComponentTreeComponent;
  let fixture: ComponentFixture<NavigateTheComponentTreeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigateTheComponentTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateTheComponentTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
