import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { SwitchComponentInterface } from './switch-component.interface';

@Component({
    template: `
    <style>:host {
    align-self: flex-start;
}</style>
    <h3 >{{data}}</h3>`,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SwitchLeftComponent implements SwitchComponentInterface {

  @Input() data: any;

}