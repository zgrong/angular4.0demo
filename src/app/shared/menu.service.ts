import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getMenuList(): Array<menuItem> {
    return [
      new menuItem(1, '首页', 'fa fa-home', '/', []),
      new menuItem(4,'系统管理', 'fa fa-list-ul', '/sysuser', [
        new menuItem(41, '系统用户', 'fa fa-user icon', '/sysuser/', []),
        new menuItem(42, '角色管理', 'fa fa-users icon', '/sysuser/role', []),
        new menuItem(42, '修改密码', 'fa fa-bomb icon', '/sysuser/mima', []),
        new menuItem(42, '组织部门', 'fa fa-bank icon', '/sysuser/zhuzhi', []),
        new menuItem(42, '行政区划', 'fa fa-building icon', '/sysuser/xingzheng', [])
      ])
    ]
  }
}

export class menuItem { 
  constructor (
    public id: number,
    public name: string,
    public icon: string,
    public url: string,
    public children: Array<menuItem>
  ) {}
}
