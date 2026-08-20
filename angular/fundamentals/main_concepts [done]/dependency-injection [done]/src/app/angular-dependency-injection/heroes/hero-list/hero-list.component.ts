import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Hero } from '../interfaces/hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'app-hero-list',
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
export class HeroListComponent {
  heroes: Hero[];

  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }
}