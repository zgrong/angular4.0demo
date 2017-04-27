import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-menu',
  templateUrl: './first-menu.component.html',
  styleUrls: ['./first-menu.component.css', '../../assets/css/uc-menu.css']
})
export class FirstMenuComponent implements OnInit {

  private firstMenuList: Array<firstMenuitem>;
  constructor() { }

  ngOnInit() {

    this.firstMenuList = [
      new firstMenuitem('菜单一', 'fa fa-home'),
      new firstMenuitem('菜单二', 'fa fa-wechat'),
      new firstMenuitem('菜单三', 'fa fa-bar-chart-o'),
      new firstMenuitem('菜单四', 'fa fa-wechat'),
      new firstMenuitem('菜单五', 'fa fa-home')
    ]

  }

}

export class firstMenuitem { 
  constructor (
    public title: string,
    public className: string
  ) {}
 }
