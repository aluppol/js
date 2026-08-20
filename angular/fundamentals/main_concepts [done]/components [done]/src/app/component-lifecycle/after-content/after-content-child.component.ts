import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'after-content-child',
    template: `<input [(ngModel)]="hero" />`,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AfterContentChild {
  hero = 'Santa';
}
