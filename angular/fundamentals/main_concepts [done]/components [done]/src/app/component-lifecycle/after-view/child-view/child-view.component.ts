import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'child-view',
    template: '<input [(ngModel)]="hero">',
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ChildViewComp {
  hero = 'Santa';
}
