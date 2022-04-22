import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from 'src/app/shared/models/event.model';
import { ToastrService } from 'src/app/shared/toastr.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: any;
  addMode = false;
  sessionDisplay = 'Add session';
  filterBy: string = 'all';
  sortBy: string = 'votes';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
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
    this.eventService.updateEvent(this.event);
    this.switchSessionsDisplay();
    this.toast.success('Event added successfully !');
  }
}
