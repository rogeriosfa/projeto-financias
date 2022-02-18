import { Injectable } from '@angular/core';

export interface Cliente {
  nome: string;
  saldo: number;
  data: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  clientes: Cliente[] = [
    { nome: 'Rogério Rodrigues', saldo: 50, data: new Date() },
    { nome: 'João Marques', saldo: 100, data: new Date() },
  ];

  constructor() {}

  addCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  removerCliente(cliente: Cliente) {
    const index = this.clientes.indexOf(cliente);
    this.clientes.splice(index, 1);
  }
}
