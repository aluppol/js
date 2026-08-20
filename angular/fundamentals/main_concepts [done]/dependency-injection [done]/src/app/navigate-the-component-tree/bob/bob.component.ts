import {Component, forwardRef, Optional, SkipSelf, ChangeDetectionStrategy} from '@angular/core';
import {Parent} from "../alex/alex.component";

@Component({
    selector: 'bob',
    templateUrl: './bob.component.html',
    styleUrls: ['./bob.component.scss'],
    providers: [{ provide: Parent, useExisting: forwardRef(() => BobComponent) }],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BobComponent implements Parent {

  name = 'Bob';

  constructor(@Optional() @SkipSelf() public parent: Parent) { }
}
