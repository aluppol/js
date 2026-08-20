import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-host-pseudo-brother',
    templateUrl: './host-pseudo-brother.component.html',
    styleUrls: ['./host-pseudo-brother.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HostPseudoBrotherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
