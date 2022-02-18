import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClienteService, Cliente } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-novo',
  templateUrl: './cliente-novo.component.html',
  styleUrls: ['./cliente-novo.component.css'],
})
export class ClienteNovoComponent implements OnInit {

  @Input()
  cliente: Cliente = new Cliente();

  //retornar novo cliente para outros componentes ou avisar do evento
  @Output()
  onSubmit: EventEmitter<Cliente> = new EventEmitter<Cliente>();

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {}

  adicionar(event: any) {
    const copy = Object.assign({}, this.cliente); //copia do cliente sem referencia
    this.clienteService.addCliente(copy); //service cadastrando novo cliente
    this.cliente = {
      nome: '',
      saldo: 0,
      data: new Date().toString(),
    };
    this.onSubmit.emit(copy);
  }
}
