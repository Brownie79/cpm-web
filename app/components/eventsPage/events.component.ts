import { Component } from '@angular/core';
import { ServerService } from '../../services/server.service'; 

@Component({
    moduleId: module.id,
    selector: 'events',
    templateUrl: 'events.html'
})

export class EventsPage {
    events: any;
    allEvents: any;
    //searchString: string;

    constructor(private serverService: ServerService){
        console.log("events loaded");
        this.serverService.getAllEvents().subscribe(e => {
            this.events = e;
            this.allEvents = e;
            console.log(this.events);
        });
    }

    attending(){
        //fetch 
        return false;
    }

    joinEvent(eventID: string){
        console.log(eventID);
    }

    leaveEvent(eventID: string){
        console.log(eventID);
    }

    search(searchstring: any){
        console.log("searching for: ", searchstring.trim());
        this.events = [];
        if(searchstring == ""){
            this.events = this.allEvents;
            return;
        }

        for(let event of this.allEvents){
            console.log(event.eventName);
            if(event._id == searchstring.trim() || event.eventName.toLowerCase().includes(searchstring.trim().toLowerCase())){
                this.events.push(event);
            } 
        }
        //console.log(this.events);

    }
}
