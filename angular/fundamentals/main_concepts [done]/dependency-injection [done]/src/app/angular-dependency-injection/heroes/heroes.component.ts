import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroService } from './services/hero.service';

@Component({
    selector: 'app-heroes',
    template: `
    <h2>Heroes</h2>
    <app-hero-list></app-hero-list>
  `,
    providers: [HeroService],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HeroesComponent { }