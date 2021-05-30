import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import * as $ from 'jquery';
import { element } from 'protractor';

@Directive({
  selector: '[appInputValidator]'
})
export class InputValidatorDirective {

  constructor(public el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event:any) {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if ( initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
