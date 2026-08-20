import { Component, Injector, ChangeDetectionStrategy } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup/popup.component';


@Component({
    selector: 'app-angular-elements',
    templateUrl: './angular-elements.component.html',
    styleUrls: ['./angular-elements.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AngularElementsComponent {
  constructor(public popup: PopupService,
    injector: Injector) {
    const PopupElement = createCustomElement(PopupComponent, { injector });

    customElements.define('popup-element', PopupElement);
  }

}
