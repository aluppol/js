import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-alex-child',
    templateUrl: './alex-child.component.html',
    styleUrls: ['./alex-child.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AlexChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
