import { Component, ElementRef, Input, ViewChild, Inject } from '@angular/core';
import { JQ_TOKEN } from './j-query.service';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent {
  @Input() title: string;
  @Input() elementId: string;
  @Input() closeOnBodyClick: string;
  @ViewChild('modalContainer') containerEl: ElementRef;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(@Inject(JQ_TOKEN) private $: any) { }

  closeModal(){
    if(this.closeOnBodyClick.toLocaleLowerCase() === "true") {
      this.$(this.containerEl.nativeElement).modal('hide');
    }
  }

}
