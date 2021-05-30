import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyText]'
})
export class OnlyTextDirective {

  constructor(public el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event:any) {
    const initalValue = this.el.nativeElement.value;

    this.el.nativeElement.value = initalValue.replace(/[^a-zA-Z\s]*/g, '');
    if ( initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
