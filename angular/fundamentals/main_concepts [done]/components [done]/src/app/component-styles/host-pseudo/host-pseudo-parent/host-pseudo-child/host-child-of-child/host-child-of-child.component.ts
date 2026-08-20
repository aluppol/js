import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-host-child-of-child',
    templateUrl: './host-child-of-child.component.html',
    styleUrls: ['./host-child-of-child.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HostChildOfChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
