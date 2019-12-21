import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';



@Component({
    // selector: 'events-list',
    //templateUrl: './events-list.component.html'
    template: `
        <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
            <div  *ngFor="let event of events" class="col-md-5">
                <event-thumbnail #thumbnail [event]='event'></event-thumbnail>
            </div>
        </div>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
        </div>
    `
})
export class EventsListComponent implements OnInit {
    events: IEvent[];
    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        // this.eventService.getEvents().subscribe(events => { this.events = events });
        this.events = this.route.snapshot.data['events']
    }

}
