import { EventService } from './shared/events.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { map } from 'rxjs/operators'


@Injectable()
export class EventListResolver implements Resolve<any>
{
  constructor(private eventSerevice: EventService) {

  }
  resolve() {
    return this.eventSerevice.getEvents().pipe(map(events => events));
  }

}
