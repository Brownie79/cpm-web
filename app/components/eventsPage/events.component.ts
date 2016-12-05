import { Component } from '@angular/core';
import { ServerService } from '../../services/server.service'; 

@Component({
    moduleId: module.id,
    selector: 'events',
    templateUrl: 'events.html'
})

export class EventsPage {
    events: Event[];

    constructor(private serverService: ServerService){
        console.log("events loaded");
        this.serverService.getAllEvents().subscribe(e => {
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