import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-autonomious-scope-checker',
    templateUrl: './autonomious-scope-checker.component.html',
    styleUrls: ['./autonomious-scope-checker.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AutonomiousScopeCheckerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
