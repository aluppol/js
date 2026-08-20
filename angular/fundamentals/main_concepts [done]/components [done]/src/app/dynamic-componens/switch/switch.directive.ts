import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appSwitchDirective]',
    standalone: false
})
export class SwitchDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
