import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-links-array',
    templateUrl: './links-array.component.html',
    styleUrls: ['./links-array.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class LinksArrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
