import { ModalConfirmacaoComponent } from './../componentes/modal-confirmacao/modal-confirmacao.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClienteService, Cliente } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  cliente: Cliente = {
    nome: '',
    saldo: 0,
    data: new Date(),
  };
  mensagemCadastro = false;

  @ViewChild(ModalConfirmacaoComponent) //pegar uma referencia de um elemento
  modalConfirmacao: ModalConfirmacaoComponent = new ModalConfirmacaoComponent(
    new ElementRef('')
  );

  constructor(public clienteService: ClienteService) {}

  ngOnInit(): void {}

  onNovoCliente(cliente: Cliente) {
    this.cliente = cliente;
    this.mensagemCadastro = true;
  }

  editarCliente(cliente: Cliente) {
    this.cliente = cliente;
  }

  excluirCliente(cliente: Cliente) {
    this.cliente = cliente;
    this.modalConfirmacao.show();
  }
}
