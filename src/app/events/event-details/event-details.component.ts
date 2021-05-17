import { EventService } from './../shared/events.service';
import { Component } from "@angular/core";
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: "event-detail",
  templateUrl: "./event-detail.component.html",
  styles: [`
  .container {padding-left:20px; padding-right:20px }
  .eventimg {height:100px}
  `]

})

export class EventDetailComponent {
  event: any
  constructor(private eventService: EventService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.event = this.eventService.
    getEvent(+this.route.snapshot.params['id'])
  }
}
