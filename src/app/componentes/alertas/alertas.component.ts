import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css'],
})
export class AlertasComponent implements OnInit {
  constructor() {}

  @Input()
  get tipo(): string {
    return 'aviso';
  }
  set tipo(name: string) {
    if (name == 'info') {
      this.classe = 'alert-info';
    }
    if (name == 'sucesso') {
      this.classe = 'alert-success';
    }
    if (name == 'alerta') {
      this.classe = 'alert-warning';
    }
    if (name == 'excluir') {
      this.classe = 'alert-danger';
    }
  }

  classe = 'alert-primary';

  ngOnInit(): void {}
}
