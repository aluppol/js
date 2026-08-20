import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TemplateDrivenFavoriteColorComponent } from './template-driven-favorite-color.component';

describe('TemplateDrivenFavoriteColorComponent', () => {
  let component: TemplateDrivenFavoriteColorComponent;
  let fixture: ComponentFixture<TemplateDrivenFavoriteColorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFavoriteColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFavoriteColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
