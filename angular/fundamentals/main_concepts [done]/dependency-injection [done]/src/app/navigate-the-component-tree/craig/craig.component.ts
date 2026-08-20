import { Component, Optional, ChangeDetectionStrategy } from '@angular/core';
import {Base} from "../alex/alex.component";

@Component({
    selector: 'craig',
    templateUrl: './craig.component.html',
    styleUrls: ['./craig.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CraigComponent{

  constructor(@Optional() public alex: Base) { }

}
