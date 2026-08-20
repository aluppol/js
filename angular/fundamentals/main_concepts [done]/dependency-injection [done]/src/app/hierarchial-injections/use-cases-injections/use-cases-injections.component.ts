import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-use-cases-injections',
    templateUrl: './use-cases-injections.component.html',
    styleUrls: ['./use-cases-injections.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class UseCasesInjectionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
