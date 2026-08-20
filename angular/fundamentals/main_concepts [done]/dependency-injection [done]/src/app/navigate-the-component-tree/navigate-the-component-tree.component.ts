import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-navigate-the-component-tree',
    templateUrl: './navigate-the-component-tree.component.html',
    styleUrls: ['./navigate-the-component-tree.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NavigateTheComponentTreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
