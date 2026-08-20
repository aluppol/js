import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-code-coverage',
    templateUrl: './code-coverage.component.html',
    styleUrls: ['./code-coverage.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CodeCoverageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
