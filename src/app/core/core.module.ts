import { NgModule } from '@angular/core';
import {MainComponent} from "./main/main.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {SidenavComponent} from "./sidenav/sidenav.component";


@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    SidenavComponent
  ],
  exports: [MainComponent, NavbarComponent, SidenavComponent],
})
export class CoreModule { }
