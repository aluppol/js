import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-template-expression-operators',
    templateUrl: './template-expression-operators.component.html',
    styleUrls: ['./template-expression-operators.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TemplateExpressionOperatorsComponent implements OnInit {
  date: Date = new Date();
  item = {};
  constructor() {}

  ngOnInit(): void {}
}
