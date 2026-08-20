import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InOutPropsComponent } from './in-out-props.component';

describe('InOutPropsComponent', () => {
  let component: InOutPropsComponent;
  let fixture: ComponentFixture<InOutPropsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InOutPropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InOutPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
