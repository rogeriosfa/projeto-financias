import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <ng-content select="[modal-title]"></ng-content>
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <ng-content select="[modal-body]"></ng-content>
          </div>
          <div class="modal-footer">
            <ng-content select="[modal-footer]"></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ModalComponent implements OnInit {
  @Output()
  onHide: EventEmitter<any> = new EventEmitter();

  @Output()
  onShow: EventEmitter<any> = new EventEmitter();

  constructor(private element: ElementRef) {}

  ngOnInit(): void {}

  hide() {
    $(this.getDivModal).hide();
  }

  show() {
    console.log('etapa 2');
    console.log($(this.getDivModal));
    $(this.getDivModal).show();
  }

  private get getDivModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }
}
