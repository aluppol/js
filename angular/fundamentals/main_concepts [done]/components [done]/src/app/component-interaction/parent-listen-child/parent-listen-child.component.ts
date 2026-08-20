import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-parent-listen-child',
    templateUrl: './parent-listen-child.component.html',
    styleUrls: ['./parent-listen-child.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ParentListenChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
