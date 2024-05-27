//Directvia: Manipulación del Dom de forma directa!
import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[highlegth]',
  standalone: true
})
export class HighlegthDirective {

  element = inject(ElementRef)

  constructor() { }

  ngOnInit()
  {
    this.element.nativeElement.style.backgroundColor = 'red'
  }
}
