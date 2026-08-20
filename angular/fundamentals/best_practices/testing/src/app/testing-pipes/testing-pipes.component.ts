import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-testing-pipes',
    templateUrl: './testing-pipes.component.html',
    styleUrls: ['./testing-pipes.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class TestingPipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
