import { Component, Input } from '@angular/core';
import { IEvent } from '../shared/models/event.model';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ["./event-thumbnail.component.css"]
})
export class EventThumbnailComponent {
  @Input() event: IEvent;
}
