import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { VoterService } from 'src/app/services/voter.service';
import { ISession } from 'src/app/shared/models/event.model';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
})
export class SessionListComponent implements OnInit, OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  constructor(public auth: AuthService, private voterService: VoterService) {}

  ngOnInit(): void {
    this.visibleSessions = this.sessions;
    this.sortSessions(this.sortBy);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortSessions(this.sortBy);
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(session, this.auth.currentUser.userName);
    }

    if (this.sortBy === 'votes') this.visibleSessions.sort(sortByVotesDesc);
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName)
  }

  private filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(
        (session) => session.level.toLocaleLowerCase() === filter
      );
    }
  }
  private sortSessions(sorter: string) {
    if (sorter === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    } else {
      this.visibleSessions.sort(sortByNameAsc);
    }
  }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}
