import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-interaction-setter-child',
    templateUrl: './interaction-setter-child.component.html',
    styleUrls: ['./interaction-setter-child.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class InteractionSetterChildComponent {
  @Input()
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    console.log('Changes in name detected: from ' + this._name + ' to ' + name);
    this._name = (name && name.trim()) || '<no name set>';
  }
  private _name = '';
}
