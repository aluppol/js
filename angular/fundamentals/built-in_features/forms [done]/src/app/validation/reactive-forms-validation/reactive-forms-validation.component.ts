import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name.directive';
import { identityRevealedValidator } from './identity-revealed.directive';
import { UniqueAlterEgoValidator } from '../template-driven-validator/uniqueAlterEgoValidator';

@Component({
    selector: 'app-reactive-forms-validation',
    templateUrl: './reactive-forms-validation.component.html',
    styleUrls: ['./reactive-forms-validation.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ReactiveFormsValidationComponent implements OnInit {
  heroForm: UntypedFormGroup;

  constructor(private uniqueAlterEgoValidator: UniqueAlterEgoValidator) {}

  ngOnInit(): void {
    this.heroForm = new UntypedFormGroup(
      {
        name: new UntypedFormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(4),
            forbiddenNameValidator(/bobby/i),
          ],
        }),
        alterEgo: new UntypedFormControl('', {
          updateOn: 'blur',
          asyncValidators: this.uniqueAlterEgoValidator.validate.bind(
            this.uniqueAlterEgoValidator
          ),
        }),
        power: new UntypedFormControl(),
      },
      { validators: identityRevealedValidator }
    );
  }

  get name() {
    return this.heroForm.get('name');
  }
  get alterEgo() {
    return this.heroForm.get('alterEgo');
  }
}
