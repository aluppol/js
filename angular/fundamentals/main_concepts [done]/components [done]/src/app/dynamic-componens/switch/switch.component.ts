import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { SwitchComponentItem } from './switch-component-item';
import { SwitchDirective } from './switch.directive';
import { SwitchComponentInterface } from './switch-component.interface';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styleUrls: ['./switch.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SwitchComponent implements OnInit {

  @Input() componentItems: SwitchComponentItem[];

  @ViewChild(SwitchDirective, { static: true }) container: SwitchDirective;

  componentIndex = 1;

  constructor() {
  }

  ngOnInit(): void {
    this.loadComponent();
  }

  private loadComponent() {
    this.componentIndex = this.componentIndex === 0 ? 1 : 0;

    const currentItem = this.componentItems[this.componentIndex];

    this.container.viewContainerRef.clear();
    const componentRef = this.container.viewContainerRef.createComponent<SwitchComponentInterface>(currentItem.component);
    componentRef.instance.data = currentItem.data;

  }

  public switchComponent() {
    this.loadComponent();
  }
}
