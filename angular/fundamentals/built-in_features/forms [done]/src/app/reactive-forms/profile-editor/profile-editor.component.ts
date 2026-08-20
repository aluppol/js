import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  UntypedFormBuilder,
  UntypedFormArray,
} from '@angular/forms';

@Component({
    selector: 'app-profile-editor',
    templateUrl: './profile-editor.component.html',
    styleUrls: ['./profile-editor.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ProfileEditorComponent {
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.fb.array([this.fb.control('')]),
  });

  constructor(private fb: UntypedFormBuilder) {}

  get aliases() {
    return this.profileForm.get('aliases') as UntypedFormArray;
  }

  public addAlias() {
    this.aliases.push(this.fb.control('', Validators.required));
  }

  public onSubmit() {
    console.warn(this.profileForm.value);
  }

  public updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }
}
