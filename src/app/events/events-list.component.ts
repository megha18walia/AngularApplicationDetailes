import { ActivatedRoute } from '@angular/router';
import { EventService } from './shared/events.service';
import { Component } from '@angular/core';
import { ToastrService } from './common/toastr.service';

@Component({
  // selector: 'events-list', User Routing TODO
  styles: [`.thumbnail {min-height: 300 px}`],
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor = "let event of eventData" class="col-md-5">
        <event-thumbnail (click)="onThumbnailClick(event.name)"
        #thumbnail
        [eventVal]="event"
        (eventClick)="handleClickEvent($event)"
      ></event-thumbnail>
      <!-- <h3>{{ thumbnail.thumbnail }}</h3> TODO
      <button class="btn btn-primary" (click)="thumbnail.getThumbnail()">
        Access Thumbnail
      </button> -->
        </div>
      </div>
    </div>
  `,
})
export class EventListComponent {
  eventData: any
  constructor(private eventService: EventService,
    private toastrService: ToastrService, private route : ActivatedRoute) {

    // TODO it is a one time activity and should not happen in a constructor
    //this.eventData = this.eventService.getEvents();
  }

  // TODO called when the component is loaded for the first time
  ngOnInit() {
    this.eventData = this.route.snapshot.data['events']
  }
  handleClickEvent(data: any) {
    console.log('Data Recieved : ', data);
  }

  onThumbnailClick(name: string) {
    this.toastrService.success(name, 'Message')
  }
}
