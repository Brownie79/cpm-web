import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService {
    url: string = "http://162.243.86.227:4870";
    public currentUser: User;


    constructor(private http: Http){
        console.log("events service initalized");   
    }


    getAllEvents(){
        return this.http.post(this.url+'/getAllEvents', {})
            .map(res => res.json());
    }

    login(usr: User){
        this.http.post(this.url+'/loginAng', usr)
            .map(res => res.json())
            .subscribe(e => {
                this.currentUser = e;
                console.log(this.currentUser);
            })
    }

    addEvent(ev: Event){
        return this.http.post(this.url+'/addEvent', ev)
            .map(res => res.json());
    }

}

export interface Event{
    "eventName": string;
	"organizer" : string; 
    "address" : string;
    "date" : string;
    "attendees" : string;
    "image" : string;
    "description": string;
}

export interface User{
  googleID: string;
  fName: string;
  lName: string;
  proPic: string;
  email: string;
  conferences: string;
}