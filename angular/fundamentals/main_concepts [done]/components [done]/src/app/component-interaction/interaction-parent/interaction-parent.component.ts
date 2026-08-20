import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-interaction-parent',
    templateUrl: './interaction-parent.component.html',
    styleUrls: ['./interaction-parent.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class InteractionParentComponent {
  public heroes = ['Dr Q', 'Magneta', 'Bombasto'];
  public master = 'Albert';
}
