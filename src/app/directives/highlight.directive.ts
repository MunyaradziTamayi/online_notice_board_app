import { Directive,Renderer2,ElementRef,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }
  @HostBinding('style.backgroundColor')backgroundColor:string='transparent'

  @HostListener('mouseenter')mouseover(){
    this.backgroundColor='grey'
  }

  @HostListener('mouseleave')mouseleave(){
    this.backgroundColor='transparent'
  }


}
