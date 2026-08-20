import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-optimization',
    templateUrl: './optimization.component.html',
    styleUrls: ['./optimization.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class OptimizationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
