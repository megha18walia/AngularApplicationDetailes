import { EventService } from './../shared/events.service';
import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService,
    private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventService.getEvent(+route.params['id']);
    if (!eventExist)
      this.router.navigate(['/404'])

    return eventExist
  }

}
