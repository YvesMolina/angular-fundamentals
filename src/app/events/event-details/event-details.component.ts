import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;
  
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(1);
  }

}
