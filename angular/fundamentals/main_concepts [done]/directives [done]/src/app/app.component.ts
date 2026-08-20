import { Component, ChangeDetectionStrategy } from '@angular/core';
import { GetMainMenuItemsService } from './get-main-menu-items.service';
import { MainMenuItem } from 'src/interfaces/mainMenuItem.intrface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class AppComponent {
  title = 'template-syntax';
  mainMenuItems: MainMenuItem[];

  constructor(public getMenuItems: GetMainMenuItemsService) {}
  ngOnInit() {
    this.mainMenuItems = this.getMenuItems.getItems();
  }
}
