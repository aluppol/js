import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-manage-heroes',
    templateUrl: './manage-heroes.component.html',
    styleUrls: ['./manage-heroes.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ManageHeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
