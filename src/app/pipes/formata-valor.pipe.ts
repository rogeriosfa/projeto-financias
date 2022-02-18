import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formataValor'
})
export class FormataValorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return 'R$ ' + value;
  }

}
