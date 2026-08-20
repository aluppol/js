import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-component-styles',
    templateUrl: './component-styles.component.html',
    styleUrls: ['./component-styles.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ComponentStylesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
