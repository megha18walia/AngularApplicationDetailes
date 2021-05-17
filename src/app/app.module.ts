import { EventListResolver } from './events/event-list-resolver.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/error404.component';

import { EventRouteActivator } from './events/event-details/event-route.service'
import { EventService } from './events/shared/events.service'
import { ToastrService } from './events/common/toastr.service';

import { appRoutes } from './routes';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    EventsComponent, EventListComponent, EventThumbnailComponent, NavBarComponent, CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsComponent]
})
export class AppModule { }
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not save the work, Are you sure you want to cancel');
  }
  else
    return false;
}


