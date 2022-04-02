import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ToastrService } from '../shared/toastr.service';

@Component({
  templateUrl: './events-list.component.html',
})
export class EventsListComponent implements OnInit {

  events: any[] = [];

  ngOnInit() {
    this.getEvents();
  }

  constructor(private eventService: EventService,
    private toastr: ToastrService) {
  }

  private getEvents(){
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: any) {
    this.toastr.success(eventName);
  }
    
}

