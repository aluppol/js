import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-interaction-child',
    templateUrl: './interaction-child.component.html',
    styleUrls: ['./interaction-child.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class InteractionChildComponent {
  @Input() hero: string;
  @Input('master') masterName: string;
}
