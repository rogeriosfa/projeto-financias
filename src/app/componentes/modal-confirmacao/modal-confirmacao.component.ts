import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';

declare const $:any;

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.css'],
})
export class ModalConfirmacaoComponent implements OnInit {
  constructor(private element: ElementRef) {}

  @Input()
  titulo: string = '';

  @Input()
  mensagem: string = '';

  @Output()
  onConfirmar: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {}

  hide() {
    const divModal = this.getDivModal();
    $(divModal).hide();
  }

  show() {
    const divModal = this.getDivModal();
    $(divModal).show();
  }

  private getDivModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild as HTMLElement;
  }

  confirmar() {
    this.onConfirmar.emit(true);
    this.hide();
  }
}
