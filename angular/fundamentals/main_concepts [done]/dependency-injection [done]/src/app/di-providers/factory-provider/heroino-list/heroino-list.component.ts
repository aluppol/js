import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Hero } from '../../../angular-dependency-injection/heroes/interfaces/hero';
import { HeroinoService } from '../../services/hero.service';

@Component({
    selector: 'app-heroino-list',
    template: `
    @for (hero of heroes; track hero) {
      <div>
        {{hero.id}} - {{hero.name}}
      </div>
    }
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeroinoListComponent {
  heroes: Hero[];

  constructor(heroService: HeroinoService) {
    this.heroes = heroService.getHeroes();
  }
}