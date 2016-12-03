import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {
    constructor(private http: Http){
        console.log("events service initalized");   
    }

    getAllEvents(){
        return this.http.post('http://162.243.86.227:4870/getAllEvents', {})
            .map(res => res.json());
    }

    getEventById(id: string){
        return this.http.post('http://162.243.86.227:4870/getEventById', { eventID: id })
            .map(res => res.json());
    }

    getEventByName(name: string){
        return this.http.post('http://162.243.86.227:4870/getEventByName', { eventName: name })
            .map(res => res.json());
    }
}
