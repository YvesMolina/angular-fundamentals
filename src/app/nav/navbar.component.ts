import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { EventService } from '../services/event/event.service';
import { IEvent, ISession } from '../shared/models/event.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchTerm = '';
  foundSessions: ISession[];
  events: IEvent[];

  constructor(public auth: AuthService, private eventService: EventService, private router:Router) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.eventService.getEvents().subscribe((events) => (this.events = events));
  }

  navigateTo(eventId: number) {
    this.router.navigate(['events/'+eventId]);
  }

  searchSessions(searchTerm: string): void {
    this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
    });
  }
}
