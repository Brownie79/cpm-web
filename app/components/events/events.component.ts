import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service'; 

@Component({
    moduleId: module.id,
    selector: 'events',
    templateUrl: 'events.html',
    providers: [ EventsService ]
})

export class Events {
    events: Event[];

    constructor(private eventsService: EventsService){
        console.log("events loaded");
        this.eventsService.getAllEvents().subscribe(e => {
            this.events = e;
            console.log(this.events);
        });
    }
}

interface event {
    id: string;
    name: string;
    address: string;
    date: string;
    attendees: string;
    image: string;
    events: string;
}


//<li class="g-signin2" data-onsuccess="onSignIn"></li>