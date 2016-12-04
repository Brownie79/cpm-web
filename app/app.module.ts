import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http'

import { AppComponent }  from './app.component';

import { NavBar } from './components/navbar/navbar.component';
import { GoogleSignIn } from './components/googlesignin/googlesignin.component';

import { AddConfPage } from './components/addConfPage/addConf.component';
import { EventsPage } from './components/eventsPage/events.component';

import { Routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule, Routing ],
  declarations: [ AppComponent, NavBar, EventsPage, GoogleSignIn, AddConfPage ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
