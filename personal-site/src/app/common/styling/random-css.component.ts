import {
  AfterViewInit,
  Component,
  Directive,
  HostBinding,
  HostListener,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CSSEffect, CSSEffects } from './CSS-effects';

@Component({
  selector: 'random-css',
  templateUrl: './random-css.component.html',
  styleUrls: ['./random-css.component.less'],
})
export class RandomCssComponent implements AfterViewInit {
  private randomCss: CSSEffect[] = CSSEffects.Hoverable;

  getRandomClass(): CSSEffect {
    const randomCssIndex = Math.floor(Math.random() * this.randomCss.length);
    console.log(randomCssIndex);
    return this.randomCss[randomCssIndex];
  }

  @ViewChildren('Content') content!: QueryList<any>;

  elementClass: string = '';
  effect: CSSEffect = this.getRandomClass();
  toggle() {
    this.effect = this.getRandomClass();
  }

  ngAfterViewInit() {}

  constructor() {
    this.toggle();
    console.log(this.effect);
  }
}
