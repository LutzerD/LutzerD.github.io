import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { ThisReceiver } from '@angular/compiler';
import {
  ChangeDetectionStrategy,
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { fromEvent, Subject, Subscription } from 'rxjs';

/**
 * Note: This doesn't work!! I spent a long time and still nothing, so this is archived until I get through meat & potatoes.
 */
@Directive({
  selector: '[zig-zag-scroll]',
})
export class ZigZagScrollDirective implements OnDestroy {
  scrollDispatcher$?: Subscription;

  lastKnownScrollPosition = window.scrollY;
  movingUp = false;
  ticking = false;

  constructor(
    private elementRef: ElementRef,
    private scrollDispatcher: ScrollDispatcher
  ) {
    console.log('hi?');
    fromEvent(document, 'wheel', { passive: false }).subscribe((e: Event) => {
      //filter out the scroll events I create??
      function movingUp(e: any) {
        if (e.wheelDelta) {
          return e.wheelDeltaY < 0;
        }
        return e.deltaY > 0;
      }
      e.stopPropagation();
      e.preventDefault();
      if (this.refMiddleOfScreen()) {
        if (movingUp(e)) {
          
        }else{
          
        }
      }
    });
  }

  //mouse event - filtered if not within middle
  refMiddleOfScreen() {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const middle = (rect.top + rect.bottom) / 2;
    const max_height = document.documentElement.clientHeight;

    console.log(rect, middle, max_height);
    console.log(middle + max_height / 10, max_height / 2);
    console.log(middle - max_height / 10);
    return (
      middle + max_height / 10 >= max_height / 2 &&
      middle - max_height / 10 <= max_height / 2
    );
  }

  ngOnDestroy(): void {
    console.log('bye?');
    this.scrollDispatcher$?.unsubscribe();
  }
}
