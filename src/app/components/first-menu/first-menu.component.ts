import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { menuItem, MenuService } from '../../shared/menu.service';

@Component({
  selector: 'app-first-menu',
  templateUrl: './first-menu.component.html',
  styleUrls: ['./first-menu.component.less']
})
export class FirstMenuComponent implements OnInit {

  private firstMenuList: Array<menuItem>;
  private toggleMenu: boolean = true;

  @Output()
  outPutSecondMenu: EventEmitter<menuItem> = new EventEmitter();

  @Output()
  outPutToggleFirstMenu: EventEmitter<boolean> = new EventEmitter();
  

  constructor(private MenuService: MenuService) { }

  ngOnInit() {
    this.firstMenuList = this.MenuService.getMenuList();
  }
  toggle () {
    if (this.toggleMenu) {
      this.toggleMenu = false;
      this.outPutToggleFirstMenu.emit(false);
    } else {
      this.toggleMenu = true;
      this.outPutToggleFirstMenu.emit(true);   
    }
  }

  getSecondMenu(secondMenu) {
    console.log(secondMenu)
    this.outPutSecondMenu.emit(secondMenu);
  }
}
