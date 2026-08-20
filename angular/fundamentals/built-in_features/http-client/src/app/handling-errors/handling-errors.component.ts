import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ConfigService} from "../requesting-data/config/config.service";

@Component({
    selector: 'app-handling-errors',
    templateUrl: './handling-errors.component.html',
    styleUrls: ['./handling-errors.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class HandlingErrorsComponent implements OnInit {

  res: any;

  constructor(private configService:ConfigService) { }

  ngOnInit(): void {

    this.configService.getError().subscribe(
      res => {
        this.res = res;
      }
    );
  }

}
