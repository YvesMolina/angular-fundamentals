import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event/event.service';
import { IEvent } from '../shared/models/event.model';

@Component({
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {
  events: any;

  ngOnInit() {
    this.getEvents();
  }

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  private getEvents() {
    this.events = this.route.snapshot.data['events'];
  }

}
