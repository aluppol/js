import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-basics-of-testing-components',
    templateUrl: './basics-of-testing-components.component.html',
    styleUrls: ['./basics-of-testing-components.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BasicsOfTestingComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
