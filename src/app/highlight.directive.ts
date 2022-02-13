import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  constructor(private el :ElementRef) { 
    this.el.nativeElement.style.textDecoration = 'underline';
  }

}
