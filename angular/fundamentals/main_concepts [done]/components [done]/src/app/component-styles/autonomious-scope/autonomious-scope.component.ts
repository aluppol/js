import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-autonomious-scope',
    templateUrl: './autonomious-scope.component.html',
    styleUrls: ['./autonomious-scope.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AutonomiousScopeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
