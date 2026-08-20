import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-host-pseudo-parent',
    templateUrl: './host-pseudo-parent.component.html',
    styleUrls: ['./host-pseudo-parent.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HostPseudoParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
