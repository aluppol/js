import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-host-pseudo',
    templateUrl: './host-pseudo.component.html',
    styleUrls: ['./host-pseudo.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HostPseudoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
