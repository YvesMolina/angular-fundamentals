import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode = false;
  sessionDisplay = 'Add session';
  filterBy = 'all';
  sortBy = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.navigateToEvent();
  }

  navigateToEvent() {
    this.route.data.forEach((data) => {
      this.event = data['event'];
      console.log(data)
      this.addMode = false;
    });
  }

  switchSessionsDisplay() {
    this.sessionDisplay = this.addMode ? 'Add session' : 'Show sessions';
    this.addMode = !this.addMode;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(
      null,
      this.event.sessions.map((s: ISession) => s.id)
    );
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe();
    this.switchSessionsDisplay();
  }
}
