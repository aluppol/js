import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-autonomious-child',
    templateUrl: './autonomious-child.component.html',
    styleUrls: ['./autonomious-child.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AutonomiousChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
