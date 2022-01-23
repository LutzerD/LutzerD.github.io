import {
  Component,
  Directive,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';
import { CSSEffect, CSSEffects } from './CSS-effects';

@Component({
  selector: 'random-css',
  templateUrl: './random-css.component.html',
  styleUrls: ['./random-css.component.less'],
})
export class RandomCssComponent {
  private randomCss: CSSEffect[] = CSSEffects.Hoverable;

  getRandomClass(): CSSEffect {
    const randomCssIndex = Math.floor(Math.random() * this.randomCss.length);
    console.log(randomCssIndex);
    return this.randomCss[randomCssIndex];
  }

  elementClass: string = '';
  effect: CSSEffect = this.getRandomClass();
  toggle() {
    this.effect = this.getRandomClass();
  }

  constructor() {
    this.toggle();
    console.log(this.effect)
  }
}
