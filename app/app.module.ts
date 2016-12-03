import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http'

import { AppComponent }  from './app.component';
import { NavBar } from './components/navbar/navbar.component'
import { Events } from './components/events/events.component'

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, NavBar, Events ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
