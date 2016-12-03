import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.html'
})

export class NavBar {
    constructor(){
        console.log("navbar loaded");
    }
 }


//<li class="g-signin2" data-onsuccess="onSignIn"></li>