import { Injectable, ApplicationRef, EnvironmentInjector, createComponent } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { PopupComponent } from './popup/popup.component';

@Injectable(
  // { providedIn: 'root'}
)
export class PopupService {

  constructor(
    private environmentInjector: EnvironmentInjector,
    private applicationRef: ApplicationRef
  ) { }


  showAsComponent(message: string) {
    const popup = document.createElement('popup-component');

    // Angular 17 removed ComponentFactoryResolver in favour of createComponent().
    const popupComponentRef = createComponent(PopupComponent, {
      environmentInjector: this.environmentInjector,
      hostElement: popup,
    });

    this.applicationRef.attachView(popupComponentRef.hostView);

    popupComponentRef.instance.closed.subscribe(() => {
      document.body.removeChild(popup);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });

    popupComponentRef.instance.message = message;

    document.body.appendChild(popup);
  }

  showAsElement(message: string) {
    const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any;

    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));

    popupEl.message = message;

    document.body.appendChild(popupEl);
  }
}
