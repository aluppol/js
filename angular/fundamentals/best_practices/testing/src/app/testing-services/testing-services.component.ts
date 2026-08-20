import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-testing-services',
    templateUrl: './testing-services.component.html',
    styleUrls: ['./testing-services.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TestingServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
