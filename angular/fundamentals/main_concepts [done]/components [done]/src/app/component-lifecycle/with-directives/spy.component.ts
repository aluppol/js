import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'spy',
    templateUrl: './spy.component.html',
    styleUrls: ['./spy.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SpyComponent {
  heroNum: number = 1;
  heroes: string[] = ['Joe', 'Tom', 'Rom', 'Jack'];
  addHero(hero) {
    this.heroes.push(hero);
  }

  resetHeroes() {
    this.heroes = [];
  }
}
