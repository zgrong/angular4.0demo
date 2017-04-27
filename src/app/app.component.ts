import { Component } from '@angular/core';

import { FirstMenuComponent } from './components/first-menu/first-menu.component';
import { menuItem } from './shared/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  secondMenu:Array<menuItem>;
  toggleFirstMenu: boolean;

  secondMenuHandler(event: Array<menuItem>) {
    this.secondMenu = event;
  }
  toggleFirstMenuHander(toggle: boolean) {
    this.toggleFirstMenu = toggle
    console.log(this.toggleFirstMenu)
  }
}
