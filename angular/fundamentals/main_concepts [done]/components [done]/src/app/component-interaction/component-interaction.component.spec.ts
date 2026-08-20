import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComponentInteractionComponent } from './component-interaction.component';

describe('ComponentInteractionComponent', () => {
  let component: ComponentInteractionComponent;
  let fixture: ComponentFixture<ComponentInteractionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInteractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
