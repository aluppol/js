import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-component-testing-scenarious',
    templateUrl: './component-testing-scenarious.component.html',
    styleUrls: ['./component-testing-scenarious.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ComponentTestingScenariousComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
