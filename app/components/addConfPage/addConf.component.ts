import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServerService, Event } from '../../services/server.service'; 

@Component({
    moduleId: module.id,
    selector: 'addConf',
    templateUrl: 'addConf.html'
})

//eventName,eventImage,eventAddress,eventDate,eventDescription
export class AddConfPage {
    message: string = "";

    public addConfForm = this.fb.group({
        eventName: ["", Validators.required],
        eventImage: ["", Validators.required],
        eventAddress: ["", Validators.required],
        eventDate: ["", Validators.required],
        eventDescription: ["", Validators.required],
    });

    constructor(public fb: FormBuilder, private server: ServerService){ }

    addConf(event: any){
        console.log(this.addConfForm.value);
        //this.server.addEvent();
        this.server.addEvent({
            "eventName": this.addConfForm.value.eventName,
            "organizer" : this.server.currentUser.email, 
            "address" : this.addConfForm.value.eventAddress,
            "date" : this.addConfForm.value.eventDate,
            "attendees" : this.server.currentUser.googleID,
            "image" : this.addConfForm.value.eventImage,
            "description": this.addConfForm.value.eventDescription
        }).subscribe(e => {
            console.log(e);
            this.message = "Event Added: " + e.eventID;
        })
    }

    /*ngAfterViewInit(){
        window['jQuery']('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 15
        });
    }*/
 } 
 

//<li class="g-signin2" data-onsuccess="onSignIn"></li>
