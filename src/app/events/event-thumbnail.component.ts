import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
})
export class EventThumbnailComponent {
  //Ways to communicate between components

  //template parameter #thumbnail
  thumbnail: any = 'Thumbnail Property';

  //Parent to chile data transfer - [event]
  @Input()
  eventVal: any;

  //child to parent data transfer - (clickevent)
  @Output()
  eventClick = new EventEmitter();

  handleClick() {
    this.eventClick.emit(this.eventVal.name);
  }

  getThumbnail() {
    console.log('Thumbnail logged');
  }
}
