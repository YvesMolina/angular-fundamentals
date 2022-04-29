import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ISession } from 'src/app/shared/models/event.model';

import { SessionListComponent } from './session-list.component';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  let fixture: ComponentFixture<SessionListComponent>;
  let mockAuthService: any, mockVoterService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SessionListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {
    it('should filter the sessions correctly', () => {
      component.sessions = <ISession[]>[
        { name: 'session 1', level: 'intermediate' },
        { name: 'session 2', level: 'hard' },
        { name: 'session 3', level: 'intermediate' },
      ];
      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
    });
    it('should sort the sessions correctly', () => {
      component.sessions = <ISession[]>[
        { name: 'session 3', level: 'intermediate' },
        { name: 'session 1', level: 'hard' },
        { name: 'session 2', level: 'intermediate' },
      ];
      component.filterBy = 'all';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions[0].name).toBe('session 1')
    });
});
});
