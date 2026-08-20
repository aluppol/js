import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-host-context-child',
    templateUrl: './host-context-child.component.html',
    styleUrls: ['./host-context-child.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HostContextChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
