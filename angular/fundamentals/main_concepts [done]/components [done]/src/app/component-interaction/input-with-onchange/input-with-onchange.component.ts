import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-input-with-onchange',
    templateUrl: './input-with-onchange.component.html',
    styleUrls: ['./input-with-onchange.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class InputWithOnchangeComponent {
  major: number = 1;
  minor: number = 0;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
