import { Injectable } from '@angular/core';

export interface Cliente {
  nome: string;
  saldo: number;
  data: string;
}

export class Cliente {
  constructor(public nome: string = '', public saldo: number = 0, public data: string = '') {
    this.nome = nome;
    this.saldo = saldo;
    this.data = data;
  }
}

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  clientes: Cliente[] = [
    { nome: 'Rogério Rodrigues', saldo: 50, data: new Date().toString() },
    { nome: 'João Marques', saldo: 100, data: new Date().toString() },
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
