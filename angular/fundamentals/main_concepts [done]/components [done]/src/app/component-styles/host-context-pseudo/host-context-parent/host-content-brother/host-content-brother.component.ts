import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-host-content-brother',
    templateUrl: './host-content-brother.component.html',
    styleUrls: ['./host-content-brother.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HostContentBrotherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
