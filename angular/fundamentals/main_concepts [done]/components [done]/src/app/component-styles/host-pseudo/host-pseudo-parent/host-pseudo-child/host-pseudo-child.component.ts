import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-host-pseudo-child',
    templateUrl: './host-pseudo-child.component.html',
    styleUrls: ['./host-pseudo-child.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HostPseudoChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
