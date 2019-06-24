import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[border-emphasis]'
})
export class HoverBorderEmphasisDirective {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  setBorder(colour: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', `1px solid ${colour}`)
  }

  removeBorder() {
    this.renderer.removeStyle(this.elementRef.nativeElement, 'border');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setBorder('red')
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.removeBorder()
  }


}
