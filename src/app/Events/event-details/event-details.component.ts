import { Component, OnInit } from "@angular/core";
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container {padding-left:20px; padding-right:20px;}
        .event-image {height: 100px}
    `]
})

export class EventDetailsComponent implements OnInit {
    event: IEvent
    constructor(private evntService: EventService, private route:ActivatedRoute) {

    }

    ngOnInit() {
        this.event = this.evntService.getEvent(+this.route.snapshot.params['id']);
    }
}