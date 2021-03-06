import { Directive, Inject, OnInit, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './j-query.service';

@Directive({
  selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  @Input('modal-trigger') modalId: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }
  ngOnInit(): void {
    this.el.addEventListener('click', () => {
      this.$(`#${this.modalId}`).modal({});
    })
  }
}
