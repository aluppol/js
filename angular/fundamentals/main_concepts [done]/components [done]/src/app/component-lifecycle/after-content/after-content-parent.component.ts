import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'after-content-parent',
    template: `<after-content>
    <after-content-child></after-content-child>
  </after-content>`,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AfterContentParent {}
