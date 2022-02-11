import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div>
      <div class="well hoverell thumbnail">
        <h2>{{ event.name }}</h2>
        <div>Date: {{ event.date }}</div>
        <div>Time: {{ event.time }}</div>
        <div>Price: \${{ event.price }}</div>
        <div>
          <span>Location: {{ event.location.address }}</span>
          <span class="pad-left">{{ event.location.city }}, {{ event.location.country }}</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./event-thumbnail.component.css"]
})
export class EventThumbnailComponent {
  @Input() event: any;
}