import { Component, OnInit } from '@angular/core';
import { CSSEffects } from '../styling/CSS-effects';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  links = [
    "Home",
    "About",
    "Yeehaw"
  ]
  constructor() { }
  CSSEffects = CSSEffects;
  ngOnInit(): void {
  }

}
