import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-debugging-tests',
    templateUrl: './debugging-tests.component.html',
    styleUrls: ['./debugging-tests.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class DebuggingTestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
