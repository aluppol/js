import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-di-in-action',
    templateUrl: './di-in-action.component.html',
    styleUrls: ['./di-in-action.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DiInActionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
