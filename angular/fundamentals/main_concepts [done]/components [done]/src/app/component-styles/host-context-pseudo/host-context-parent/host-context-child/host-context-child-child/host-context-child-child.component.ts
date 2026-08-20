import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-host-context-child-child',
    templateUrl: './host-context-child-child.component.html',
    styleUrls: ['./host-context-child-child.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HostContextChildChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
