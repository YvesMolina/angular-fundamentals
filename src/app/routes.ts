import { NotFoundComponent } from './errors/not-found.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsListResolverService } from './services/event-list-resolver/events-list-resolver.service';
import { EventResolverService } from './services/event/event-resolver.service';

export const appRoutes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventsListResolverService },
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    resolve: { event: EventResolverService } 
  },
  {
    path: 'events/session/new',
    component: CreateSessionComponent,
  },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
