import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-angular-dependency-injection',
    templateUrl: './angular-dependency-injection.component.html',
    styleUrls: ['./angular-dependency-injection.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AngularDependencyInjectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
