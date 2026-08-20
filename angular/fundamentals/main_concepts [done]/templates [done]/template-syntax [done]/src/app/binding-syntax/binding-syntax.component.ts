import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-binding-syntax',
    templateUrl: './binding-syntax.component.html',
    styleUrls: ['./binding-syntax.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class BindingSyntaxComponent implements OnInit {
  isUnchanged: boolean;

  constructor() {}

  ngOnInit(): void {
    this.isUnchanged = true;
  }

  toggleUnchanged() {
    this.isUnchanged = !this.isUnchanged;
  }
}
