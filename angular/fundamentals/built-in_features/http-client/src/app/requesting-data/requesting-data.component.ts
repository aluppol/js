import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-requesting-data',
    templateUrl: './requesting-data.component.html',
    styleUrls: ['./requesting-data.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class RequestingDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
