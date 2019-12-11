import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';

@Component({
    templateUrl: 'create-event.component.html',
    styles: [`
    em {float:right; color: #E05C65; padding-left: 10px;}
    .error input {background-color: #e3C3C5;}
    .error ::-webkit-input-placeholder {color: #999;}
    .error :: -moz-placeholder {color: #999; }
    .error :-moz-placeholder {color: #999;}
    .error :ms-input-placeholder {color: #999;}
  `]
})
export class CreateEventComponent implements OnInit {
    newEvent;
    isDirty: boolean = true
    constructor(private router: Router, private eventService: EventService) {

    }

    ngOnInit() {
        this.newEvent = {
            name: 'Ng Spectacular',
            date: '8/8/2018',
            time: '10am',
            price: 799.23,
            location: {
                address: '3243 Hppy st',
                city: 'Felicity',
                country: 'Angularistan'
            },
            onlineUrl: 'http://ngspectacular.com',
            imageUrl: 'http://ngspectacular.com/logo.png'
        };
    }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}
