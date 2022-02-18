import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSaldoColor]'
})
export class SaldoColorDirective {

  constructor(private element: ElementRef) { }

  @Input()
  set appSaldoColor(value: number) {
    const nativeElement: HTMLElement = this.element.nativeElement;
    nativeElement.style.color = value >= 100 ? 'green' : 'red';
  }

}
