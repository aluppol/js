import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-interaction-via-service',
    templateUrl: './interaction-via-service.component.html',
    styleUrls: ['./interaction-via-service.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class InteractionViaServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
