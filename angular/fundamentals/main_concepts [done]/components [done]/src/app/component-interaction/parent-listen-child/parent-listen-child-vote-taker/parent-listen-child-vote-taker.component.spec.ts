import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ParentListenChildVoteTakerComponent } from './parent-listen-child-vote-taker.component';

describe('ParentListenChildVoteTakerComponent', () => {
  let component: ParentListenChildVoteTakerComponent;
  let fixture: ComponentFixture<ParentListenChildVoteTakerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentListenChildVoteTakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentListenChildVoteTakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
