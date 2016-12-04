import { Component } from '@angular/core';
import { EventsService } from '../../services/events.service'; 

@Component({
    moduleId: module.id,
    selector: 'events',
    templateUrl: 'events.html',
    providers: [ EventsService ]
})

export class EventsPage {
    events: Event[];

    constructor(private eventsService: EventsService){
        console.log("events loaded");
        this.eventsService.getAllEvents().subscribe(e => {
            this.events = e;
            //console.log(this.events);
        });
    }
}

interface event{
    "eventName": string;
	"organizer" : string; 
    "address" : string;
    "date" : string;
    "attendees" : string;
    "image" : string;
    "description": string;
}