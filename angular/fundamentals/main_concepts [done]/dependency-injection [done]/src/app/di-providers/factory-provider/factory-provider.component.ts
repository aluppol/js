import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { heroServiceProvider } from '../services/hero.service.provider';


@Component({
    selector: 'app-factory-provider',
    templateUrl: './factory-provider.component.html',
    styleUrls: ['./factory-provider.component.scss'],
    providers: [heroServiceProvider],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class FactoryProviderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
