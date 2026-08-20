import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-root',
    template: `
    <h1>{{ title }}</h1>
    <h2>My favorite hero is: {{ myHero.name }}</h2>
    <p>Heroes:</p>
    <ul>
      @for (hero of heroes; track hero) {
        <li>{{ hero.name }}</li>
      }
    </ul>
    @if (heroes.length > 3) {
      <p>There are many heroes!</p>
    }
    `,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent {
  title: string;
  myHero: Hero;

  heroes: Hero[] = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado'),
  ];

  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = this.heroes[0];
  }
}
