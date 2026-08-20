import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-host-context-sibling',
    templateUrl: './host-context-sibling.component.html',
    styleUrls: ['./host-context-sibling.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HostContextSiblingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
