import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-template-driven-favorite-color',
    templateUrl: './template-driven-favorite-color.component.html',
    styleUrls: ['./template-driven-favorite-color.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TemplateDrivenFavoriteColorComponent {
  public favoriteColor = '';
}
