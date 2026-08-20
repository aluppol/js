import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-global-vs-local',
    templateUrl: './global-vs-local.component.html',
    styleUrls: ['./global-vs-local.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class GlobalVsLocalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
