import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';



@Component({
    // selector: 'events-list',
    //templateUrl: './events-list.component.html'
    template: `
        <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
            <div  *ngFor="let event of events" class="col-md-5">
                <event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)" 
                (click)="handleThumbnailClick(event.name)" [event]='event'></event-thumbnail>
            </div>
        </div>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
        </div>
    `
})
export class EventsListComponent implements OnInit {
    events: any;
    constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute) {

    }

    ngOnInit() {
        // this.eventService.getEvents().subscribe(events => { this.events = events });
        this.events=this.route.snapshot.data['events']
    }
    handleThumbnailClick(eventName) {
        this.toastr.success(eventName);
    }
    handleEventClicked(data) {
        console.log('Received: ', data);
    }
}
