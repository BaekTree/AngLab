import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserInterComponent } from './components/user-inter/user-inter.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,  //components here
    UserComponent, UserInterComponent, UsersComponent, NavbarComponent
  ],
  imports: [  //modules here
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]//어느 component을 시작할 것인지 결정
})
export class AppModule { }
