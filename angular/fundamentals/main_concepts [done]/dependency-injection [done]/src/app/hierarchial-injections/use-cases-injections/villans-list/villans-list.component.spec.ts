import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VillansListComponent } from './villans-list.component';

describe('VillansListComponent', () => {
  let component: VillansListComponent;
  let fixture: ComponentFixture<VillansListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VillansListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
