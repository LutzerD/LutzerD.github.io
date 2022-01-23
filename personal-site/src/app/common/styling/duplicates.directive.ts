import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

/**
 * This is really only useful for duplicating ng-content, since there isn't any way to have multiple <ng-content> atm... 
 */
@Directive({
  selector: '[duplicate]',
})
export class DuplicatesDirective {
  private _duplicate: number = 0; //number of copies

  @Input()
  public get duplicate(): number {
    return this._duplicate;
  }
  public set duplicate(value: number) {
    value = Math.max(value || 0, 0);
    this._duplicate = value;
    this.setDuplicates();
  }

  get parentElement(): HTMLElement {
    return this.el.nativeElement.parentElement;
  }

  clearDuplicates() {
    const duplicateElements =
      this.parentElement.querySelectorAll('[id^="dupe-"]'); //id starts with "dupe"
    duplicateElements.forEach((e: Element) => e.remove());
  }

  setDuplicates() {
    this.clearDuplicates();
    for (let i = 1; i <= this.duplicate; i++) {
      const elementCopy = this.el.nativeElement.cloneNode(true);
      elementCopy.id = elementCopy.id
        ? elementCopy.id + 'dupe-' + i
        : 'dupe-' + i;

      this.renderer.appendChild(this.parentElement, elementCopy)
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    const observer = new MutationObserver((mutations) => {
      this.setDuplicates();
    });
    
    observer.observe(el.nativeElement, {
      childList: true,
      characterData: true,
      subtree: true,
    });
  }
}
