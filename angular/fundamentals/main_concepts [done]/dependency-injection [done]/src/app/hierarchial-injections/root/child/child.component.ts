import { Component, Host, OnInit, Optional, SkipSelf, ChangeDetectionStrategy } from '@angular/core';
import { AnimalService } from '../../services/animal.service';
import { FlowerService } from '../../services/flower.service';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    providers: [{ provide: FlowerService, useValue: { emoji: '🌻' } }], viewProviders: [{ provide: AnimalService, useValue: { emoji: '🐶' } }],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ChildComponent implements OnInit {

  constructor(@Host() @SkipSelf() @Optional() public readonly animalService?: AnimalService, @SkipSelf() @Host() @Optional() public readonly flowerService?: FlowerService) { }

  ngOnInit(): void {
  }

}
