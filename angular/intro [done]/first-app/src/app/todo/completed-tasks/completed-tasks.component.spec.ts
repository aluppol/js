import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CompletedTasksComponent } from './completed-tasks.component';

describe('CompletedTasksComponent', () => {
  let component: CompletedTasksComponent;
  let fixture: ComponentFixture<CompletedTasksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
