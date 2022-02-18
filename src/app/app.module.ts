import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteNovoComponent } from './cliente-novo/cliente-novo.component';
import { SaldoColorDirective } from './directives/saldo-color.directive';
import { AlertasComponent } from './componentes/alertas/alertas.component';
import { ModalConfirmacaoComponent } from './componentes/modal-confirmacao/modal-confirmacao.component';
import { FormataValorPipe } from './pipes/formata-valor.pipe';
import { ModalComponent } from './componentes/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    ClienteNovoComponent,
    SaldoColorDirective,
    AlertasComponent,
    ModalConfirmacaoComponent,
    FormataValorPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
