import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-interaction-child-custom',
    templateUrl: './interaction-child-custom.component.html',
    styleUrls: ['./interaction-child-custom.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class InteractionChildCustomComponent {
  @Input()
  get name(): string {
    return this._name;
  }
  set name(newName) {
    console.log(
      `Change detectect in name input!\n From ${this._name} to ${newName}`
    );
    this._name = newName;
  }

  private _name: string;
}
