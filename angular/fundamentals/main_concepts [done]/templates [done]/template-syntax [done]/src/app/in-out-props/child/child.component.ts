import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ChildComponent implements OnInit {
  @Input() item: string;
  @Input('importantInput') justTestInput: string;

  @Output() newItemEvent = new EventEmitter<string>();
  @Output() removeItem = new EventEmitter<string>();
  @Output('importantEvent') justTestOutput = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    this.justTestOutput.emit('+1 Item');
  }

  removeCurrentItem() {
    this.removeItem.emit(this.item);
  }
}
