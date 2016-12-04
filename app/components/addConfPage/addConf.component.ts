import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'addConf',
    templateUrl: 'addConf.html'
})

//eventName,eventImage,eventAddress,eventDate,eventDescription
export class AddConfPage {
    public addConfForm = this.fb.group({
        eventName: ["", Validators.required],
        eventImage: ["", Validators.required],
        eventAddress: ["", Validators.required],
        eventDate: ["", Validators.required],
        eventDescription: ["", Validators.required],
    });

    constructor(public fb: FormBuilder){ }

    addConf(event: any){
        console.log(event);
    }

    ngAfterViewInit(){
        window['jQuery']('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 15
        });
    }
 } 
 

//<li class="g-signin2" data-onsuccess="onSignIn"></li>
