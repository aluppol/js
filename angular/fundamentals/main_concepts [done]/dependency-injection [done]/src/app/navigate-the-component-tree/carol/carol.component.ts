import {Component, OnInit, Optional, ChangeDetectionStrategy} from '@angular/core';
import {Parent} from "../alex/alex.component";

@Component({
    selector: 'carol',
    templateUrl: './carol.component.html',
    styleUrls: ['./carol.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CarolComponent{

  name = 'Carol';

  constructor(@Optional() public parent?: Parent) { }

}
