import { Routes } from "@angular/router";
import { NotFoundComponent } from "./errors/not-found.component";
import { CreateEventComponent } from "./events/create-event/create-event.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventRouteActivatorService } from "./events/event-details/event-route-activator.service";
import { EventsListComponent } from "./events/events-list.component";

export const appRoutes = [
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: '404', component: NotFoundComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
]