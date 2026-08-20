import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-template-driven-validator',
    templateUrl: './template-driven-validator.component.html',
    styleUrls: ['./template-driven-validator.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TemplateDrivenValidatorComponent {
  public nameVariable: string;
  public alterEgoVariable: string;
  public powerVariable: string;
}
