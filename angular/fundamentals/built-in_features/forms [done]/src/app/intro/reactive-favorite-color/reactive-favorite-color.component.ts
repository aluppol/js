import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
    selector: 'app-reactive-favorite-color',
    templateUrl: './reactive-favorite-color.component.html',
    styleUrls: ['./reactive-favorite-color.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ReactiveFavoriteColorComponent {
  public favoriteColorControl = new UntypedFormControl('');
}
