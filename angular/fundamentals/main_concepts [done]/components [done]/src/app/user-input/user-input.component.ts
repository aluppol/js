import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-user-input',
    templateUrl: './user-input.component.html',
    styleUrls: ['./user-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class UserInputComponent implements OnInit {
  keys = '';

  constructor() {}

  ngOnInit(): void {}

  catchKey(val: string) {
    this.keys += val + ' | ';
  }

  catchEnter(val: string) {
    this.keys = val;
  }

  updateVal(val) {
    this.keys = val;
  }

  changeBg(node) {
    node.style.backgroundColor = this.generateColor();
  }

  generateColor() {
    return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, ${Math.random()})`;
  }
}
