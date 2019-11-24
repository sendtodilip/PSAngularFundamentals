import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    //templateUrl: './events-list.component.html'
    template: `
        <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)" [event]='event1'></event-thumbnail>
        <h3>{{thumbnail.someProperty}}</h3>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
        </div>
    `
})
export class EventsListComponent {

    event1 = {
        id: 1,
        name: 'Angular Connect',
        time: '10:00am',
        price: 599.99,
        imageUrl: '/assets/images/anuglarconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    };

    handleEventClicked(data) {
        console.log('Received: ', data);
    }
}
