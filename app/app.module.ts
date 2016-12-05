//Angular Core
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Bootstrap Components
import { AppComponent }  from './app.component';

//Middleware Components
import { NavBar } from './components/navbar/navbar.component';
import { GoogleSignIn } from './components/googlesignin/googlesignin.component';

//Page Components to be used for Routing
import { AddConfPage } from './components/addConfPage/addConf.component';
import { EventsPage } from './components/eventsPage/events.component';

//Services and Routing
import { Routing } from './app.routing';
import { ServerService } from './services/server.service';


@NgModule({
  imports:      [ BrowserModule, HttpModule, Routing, ReactiveFormsModule, FormsModule ],
  declarations: [ AppComponent, NavBar, EventsPage, GoogleSignIn, AddConfPage ],
  providers:    [ ServerService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
