import { Component, OnInit, Input } from '@angular/core';
import { menuItem } from '../../shared/menu.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.less']
})
export class ContentComponent implements OnInit {

  private hasSecondMenu: boolean;
  private firstMenuStyle:boolean;

  @Input()
  secondMenu: Array<menuItem>;

  @Input()
  toggleFirstMenu: boolean;

  constructor() { }

  ngOnChanges() {
    if (this.secondMenu && this.secondMenu.length > 0) {
      this.hasSecondMenu = true;
    } else {
      this.hasSecondMenu = false;
    }
  }

  ngOnInit() {
    this.toggleFirstMenu = true;
  }

}
