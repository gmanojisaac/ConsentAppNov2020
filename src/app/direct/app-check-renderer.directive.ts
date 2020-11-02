import { Directive, ElementRef, Renderer2, HostListener, HostBinding, AfterViewInit  } from '@angular/core';

@Directive({
  selector: '[appAppCheckRenderer]'
})
export class AppCheckRendererDirective implements AfterViewInit {
  div: any;
  text: any;

  @HostBinding('style.outline') 
  outline: string;
  @HostListener('click') onclick(){
    this.changeColor('blue');
    this.outline = '10px solid black';
    this.renderer.removeChild(this.el.nativeElement, this.div);

  }
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.changeColor('red');

   }
   changeColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  ngAfterViewInit(){
    this.div = this.renderer.createElement('div');
    this.text = this.renderer.createText('Hello world!');
  
    this.renderer.appendChild(this.div, this.text);
    this.renderer.appendChild(this.el.nativeElement, this.div);
  }


}
