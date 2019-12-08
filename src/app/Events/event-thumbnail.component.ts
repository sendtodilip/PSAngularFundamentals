import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <!--[class.green]="event?.time==='8:00 am'"
        [ngClass]="{green: event?.time ==='8:00 am', bold: event?.time==='8:00 am'}"
        [ngClass]="getStartTimeClass()"
        [ngStyle]="{'color': event?.time === '8:00 am' ? '#003300' : '#bbb', 
        'font-weight': event?.time === '8:00 am' ? 'bold' : 'normal'}"  -->
        <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{ event?.price }}</div>
        <!--<div *ngIf="event?.location">-->
        <div [hidden]="!event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
        </div>
    `,
    styles: [`
        .green {color: green !important;}
        .bold {font-weight: bold;}
        .thumbnail {min-height: 210px;}
        .pad-left {margin-left: 10px;}
        .well div {color: #bbb;}
    `]
})

export class EventThumbnailComponent {
    @Input() event: any;
    @Output() eventClick = new EventEmitter();
    someProperty: any = 'Some Property';

    handleClickMe() {
        // console.log('clicked!');
        // this.eventClick.emit('Foo');
        this.eventClick.emit(this.event.name);
    }

    logFoo() {
        console.log('Log Foo');
    }

    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am') {
            return 'green bold';
        } else {
            return '';

        }
        // const isEearlyStart = 
        // return {green:isEearlyStart, bold: isEearlyStart}
    }

    getStartTimeStyle() {
        if (this.event && this.event.time === '8:00 am') {
            return {color: '#003300', 'font-weight': 'bold'};
        } else {
            return [];
        }
    }
}