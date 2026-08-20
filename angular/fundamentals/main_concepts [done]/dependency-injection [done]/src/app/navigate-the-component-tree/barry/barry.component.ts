import {Component, forwardRef, OnInit, Optional, SkipSelf, ChangeDetectionStrategy} from '@angular/core';
import {Parent} from "../alex/alex.component";

@Component({
    selector: 'barry',
    templateUrl: './barry.component.html',
    styleUrls: ['./barry.component.scss'],
    providers: [{ provide: Parent, useExisting: forwardRef(() => BarryComponent) }],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BarryComponent implements Parent {

  name = 'Barry';

  constructor(@Optional() @SkipSelf() public parent?: Parent) { }

}
