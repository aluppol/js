import {Component, Optional, ChangeDetectionStrategy} from '@angular/core';
import {Parent} from "../alex/alex.component";

@Component({
    selector: 'chris',
    templateUrl: './chris.component.html',
    styleUrls: ['./chris.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ChrisComponent implements Parent {

  name = 'Chris';

  constructor(@Optional() public parent?: Parent) { }
}
