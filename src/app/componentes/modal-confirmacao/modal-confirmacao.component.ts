import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { Modalable } from '../modal/modalable';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.css'],
})
export class ModalConfirmacaoComponent extends Modalable implements OnInit {
  constructor() {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();
  }

  @Input()
  titulo: string = '';

  @Input()
  mensagem: string = '';

  @Output()
  onConfirmar: EventEmitter<boolean> = new EventEmitter<boolean>();

  confirmar() {
    this.onConfirmar.emit(true);
    this.hide();
  }
}
