import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { SwitchComponentInterface } from './switch-component.interface';

@Component({
    template: `
  <style>:host {
    align-self: flex-end;
}</style>
    <h3 >{{data}}</h3>`,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SwitchRightComponent implements SwitchComponentInterface {

  @Input() data: any;

}
