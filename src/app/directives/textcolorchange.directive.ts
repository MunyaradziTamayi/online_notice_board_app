import { Directive ,ElementRef,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appTextcolorchange]'
})
export class TextcolorchangeDirective {

  constructor(private elRef:ElementRef) { }
  @HostBinding('style.color')textColor:String='transparent';

   @HostListener('mouseenter')mouseEnter(){
            this.changebackgroundcolor('grey');
   }
   @HostListener('mouseleave')mouseLeave(){
    this.changebackgroundcolor('transparent');

  }
 private changebackgroundcolor(color: string){
  this.textColor=color;
 }

  
}
