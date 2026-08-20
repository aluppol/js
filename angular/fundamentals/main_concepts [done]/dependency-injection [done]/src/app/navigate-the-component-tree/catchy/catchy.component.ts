import { Component, Optional, ChangeDetectionStrategy } from '@angular/core';
import {AlexComponent} from "../alex/alex.component";

@Component({
    selector: 'catchy',
    templateUrl: './catchy.component.html',
    styleUrls: ['./catchy.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CatchyComponent {

  constructor(@Optional() public alex: AlexComponent) { }

}
