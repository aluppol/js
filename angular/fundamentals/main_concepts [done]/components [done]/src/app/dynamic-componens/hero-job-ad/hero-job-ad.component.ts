import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { AdComponent } from '../ad.component';

@Component({
    template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>

      {{data.body}}
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;

}