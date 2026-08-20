import { Component, Host, OnInit, Optional, SkipSelf, ChangeDetectionStrategy } from '@angular/core';

import { FlowerService } from '../services/flower.service';
import { AnimalService } from '../services/animal.service';

@Component({
    selector: 'app-root-h',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss'],
    viewProviders: [{ provide: AnimalService, useValue: { emoji: '🦔' } }],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class RootComponent implements OnInit {

  constructor(public readonly flowerService: FlowerService, @Host() @SkipSelf() @Optional() public readonly animalService?: AnimalService) { }

  ngOnInit(): void {
  }

}
