import {Directive, ElementRef, HostBinding, Input} from '@angular/core';

@Directive({selector: '[ccd-button]', standalone: true})
export class CCDButtonDirective {
  @Input() icon: boolean = false;
  @Input() showArrow = false;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @HostBinding('class') get classes(): string {
    return `ccd-button  ${this.icon ? 'icon' : ''} ${this.size} ${this.showArrow ? 'arrow' : ''}`;
  }

  constructor(private elementRef: ElementRef) {
  }
}
