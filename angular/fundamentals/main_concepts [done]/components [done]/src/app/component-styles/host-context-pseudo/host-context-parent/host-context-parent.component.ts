import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-host-context-parent',
    templateUrl: './host-context-parent.component.html',
    styleUrls: ['./host-context-parent.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HostContextParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
