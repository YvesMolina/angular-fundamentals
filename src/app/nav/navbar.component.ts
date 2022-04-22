import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { EventService } from '../services/event/event.service';
import { ISession } from '../shared/models/event.model';
import { IUser } from '../shared/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  foundSessions: ISession[];

  constructor(public auth: AuthService, private eventService: EventService) {}

  ngOnInit(): void {}

  searchSessions(searchTerm: string): void {
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
      }
    )
  }
}
