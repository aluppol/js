import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeroTaxReturnComponent } from './hero-tax-return.component';

describe('HeroTaxReturnComponent', () => {
  let component: HeroTaxReturnComponent;
  let fixture: ComponentFixture<HeroTaxReturnComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroTaxReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTaxReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
