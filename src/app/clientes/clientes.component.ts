import { ModalConfirmacaoComponent } from './../componentes/modal-confirmacao/modal-confirmacao.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClienteService, Cliente } from '../services/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  cliente: Cliente = new Cliente();
  mensagemCadastro = false;

  @ViewChild(ModalConfirmacaoComponent)
  modalConfirmacao: ModalConfirmacaoComponent = new ModalConfirmacaoComponent;

  constructor(public clienteService: ClienteService) {}

  ngOnInit(): void {}

  onNovoCliente(cliente: Cliente) {
    this.cliente = cliente;
    this.mensagemCadastro = true;
    this.cliente = new Cliente();
  }

  editarCliente(cliente: Cliente) {
    this.cliente = cliente;
  }

  excluirCliente(cliente: Cliente) {
    this.cliente = cliente;
    this.modalConfirmacao.show();
  }

  confirmarExclusao() {
    this.clienteService.removerCliente(this.cliente);
  }
}
