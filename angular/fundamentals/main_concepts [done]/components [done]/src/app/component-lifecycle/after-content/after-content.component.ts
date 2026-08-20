import {
  Component,
  AfterContentChecked,
  AfterContentInit,
  ContentChild,
  ChangeDetectionStrategy
} from '@angular/core';
import { AfterContentChild } from './after-content-child.component';

@Component({
    selector: 'after-content',
    template: `<p>{{ comment }}</p>
    <div>-- projected content begins --</div>
    <ng-content></ng-content>
    <div>-- projected content ends --</div>
    <ul>
      @for (msg of log; track msg; let i = $index) {
        <li>#{{ i }}: {{ msg }}</li>
      }
    </ul>`,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AfterContent implements AfterContentChecked, AfterContentInit {
  private prevHero = '';
  comment = '';
  log: string[] = [];

  @ContentChild(AfterContentChild) contentChild: AfterContentChild;

  ngAfterContentInit() {
    this.logIt('AfterContentInit');
    this.doSomething();
  }
  ngAfterContentChecked() {
    if (this.prevHero === this.contentChild.hero) {
      this.logIt('AfterContentChecked (no change)');
    } else {
      this.prevHero = this.contentChild.hero;
      this.logIt('AfterContentChecked');
      this.doSomething();
    }
  }

  logIt(text) {
    this.log.push(text);
  }

  doSomething() {
    const c = this.contentChild.hero.length > 10 ? "That's a long name" : '';
    if (c !== this.comment) {
      this.comment = c;
      this.logIt(c);
    }
  }
}
