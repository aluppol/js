import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-host-pseudo-sibling',
    templateUrl: './host-pseudo-sibling.component.html',
    styleUrls: ['./host-pseudo-sibling.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HostPseudoSiblingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
