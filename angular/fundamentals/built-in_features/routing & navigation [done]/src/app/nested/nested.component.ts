import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-nested',
    templateUrl: './nested.component.html',
    styleUrls: ['./nested.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class NestedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
