import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {InterceptorToggleService} from "./interceptor-toggle.service";

@Component({
    selector: 'app-interceptors',
    templateUrl: './interceptors.component.html',
    styleUrls: ['./interceptors.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class InterceptorsComponent implements OnInit {

  constructor(
    public interceptorsToggle: InterceptorToggleService
  ) { }

  ngOnInit(): void {
  }



}
