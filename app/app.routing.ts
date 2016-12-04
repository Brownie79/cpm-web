import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent}    from './app.component'
import {EventsPage}  from './components/eventsPage/events.component';
import {AddConfPage} from './components/addConfPage/addConf.component';

const appRoutes: Routes = [
    {
        path: '',
        component: EventsPage
    },
    {
        path: 'addEvent',
        component: AddConfPage
    }
] 

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
