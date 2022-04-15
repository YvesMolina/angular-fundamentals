import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event/event.service';
import { ToastrService } from '../shared/toastr.service';

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
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  private getEvents() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName);
  }
}
