import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-testing-utility-apis',
    templateUrl: './testing-utility-apis.component.html',
    styleUrls: ['./testing-utility-apis.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TestingUtilityApisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
