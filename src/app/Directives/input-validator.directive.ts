import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import * as $ from 'jquery';
import { element } from 'protractor';

@Directive({
  selector: '[appInputValidator]'
})
export class InputValidatorDirective {

  constructor(public el: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('keypress',['$event']) onKeyPress(event:any){

    // let Input=<HTMLInputElement>this.el.nativeElement;

    // if (isNaN(event.key)){
    //  console.log(event.key);
    // }

  }

}
