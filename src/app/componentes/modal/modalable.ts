import { ModalComponent } from './modal.component';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
 template: ''
})

export class Modalable implements OnInit {
  @ViewChild(ModalComponent)
  modalComponent: ModalComponent | undefined;

  @Output()
  onHide: EventEmitter<any> = new EventEmitter();

  @Output()
  onShow: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.modalComponent?.onHide.subscribe((event) => {
      this.onHide.emit(event);
    });
    this.modalComponent?.onShow.subscribe((event) => {
      this.onShow.emit(event);
    });
  }

  public hide() {
    this.modalComponent?.hide();
  }

  show() {
    this.modalComponent?.show();
  }
}
