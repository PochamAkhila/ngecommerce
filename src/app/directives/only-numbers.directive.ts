import { Directive, ElementRef, HostListener } from '@angular/core';
import { KeyCodes } from '../enums/key-codes';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  el!: ElementRef; //we are not defining any value to it so angular will through error thats y we use ! here
  @HostListener("keydown", ["$event"]) onKeyDown(event: any) {
    const enteredKey = event.which || event.keyCode;
    // console.log(enteredKey)

    // const allowedKeys = [8, 37, 46];
    // if (allowedKeys.indexOf(enteredKey) != -1) {
    //   return
    // }

    if(KeyCodes[enteredKey]){
      return //this is ts way
    }
    if (enteredKey > 47 && enteredKey < 58) {
      return
    }
    event.preventDefault();
  }

  constructor(el: ElementRef) {
    this.el = el;

    // console.log(this.el.nativeElement);
    // this.el.nativeElement.classList.add("dummy-class");
  }

}
