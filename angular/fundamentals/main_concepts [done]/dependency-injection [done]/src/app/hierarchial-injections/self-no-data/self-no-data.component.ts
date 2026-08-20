import { Component, OnInit, Optional, Self, ChangeDetectionStrategy } from '@angular/core';

import { LeafService } from '../services/leaf.service';
import { FlowerService } from '../services/flower.service';

@Component({
    selector: 'app-self-no-data',
    templateUrl: './self-no-data.component.html',
    styleUrls: ['./self-no-data.component.scss'],
    providers: [{ provide: FlowerService, useValue: { emoji: '🌼' } }],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class SelfNoDataComponent implements OnInit {

  constructor(@Self() @Optional() public leafService: LeafService,
    @Self() @Optional() flowerService: FlowerService) {
    console.log('Leaf@Self ', leafService);
    console.log('Flower@Self ', flowerService);
  }

  ngOnInit(): void {
  }

}
