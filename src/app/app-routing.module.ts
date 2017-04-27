import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SysuserComponent } from './components/sysuser/sysuser.component';
import { RoleComponent } from './components/role/role.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
  {
    path: 'sysuser',
    children: [
      {
        path: '',
        component: SysuserComponent
      },
      {
        path: 'role',
        component: RoleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
