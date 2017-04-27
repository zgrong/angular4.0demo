import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { FirstMenuComponent } from './components/first-menu/first-menu.component';
import { ContentComponent } from './components/content/content.component';
import { HomeComponent } from './components/home/home.component';
import { SysuserComponent } from './components/sysuser/sysuser.component';
import { RoleComponent } from './components/role/role.component';

import { MenuService } from './shared/menu.service';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FirstMenuComponent,
    ContentComponent,
    HomeComponent,
    SysuserComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
