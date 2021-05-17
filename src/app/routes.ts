import { EventListResolver } from './events/event-list-resolver.service';
import { EventRouteActivator } from './events/event-details/event-route.service';
import { Routes } from "@angular/router"
import { EventListComponent } from "./events/events-list.component";
import { EventDetailComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from "./errors/error404.component";


export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventListComponent, resolve : {events : EventListResolver} },
  { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
]
