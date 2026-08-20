import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-testing-attribute-directives',
    templateUrl: './testing-attribute-directives.component.html',
    styleUrls: ['./testing-attribute-directives.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TestingAttributeDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
