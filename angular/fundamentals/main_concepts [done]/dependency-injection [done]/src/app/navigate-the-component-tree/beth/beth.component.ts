import {Component, forwardRef, Optional, SkipSelf, ChangeDetectionStrategy} from '@angular/core';
import {Parent} from "../alex/alex.component";

export  function provideComponentWithToken(component: any, token: any){
  return {provide: token, useExisting: forwardRef(()=>component)};
}

@Component({
    selector: 'beth',
    templateUrl: './beth.component.html',
    styleUrls: ['./beth.component.scss'],
    providers: [provideComponentWithToken(BethComponent, Parent)],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BethComponent implements Parent {

  name = 'Beth';

  constructor(@Optional() @SkipSelf() public parent: Parent) { }
}
