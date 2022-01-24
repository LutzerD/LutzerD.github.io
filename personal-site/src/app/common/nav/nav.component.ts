import { Component, OnInit } from '@angular/core';
import { CSSEffects } from '../styling/CSS-effects';

export interface NavLink{
  Title: string;
  Hint: string;
  Route: string;
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
})
export class NavComponent implements OnInit {
  links: NavLink[] = [
    {
      Title: 'Home',
      Hint: "My Elevator Pitch :)",
      Route: "home",
    },
    {
      Title: 'Blog',
      Hint: 'Madness? A little.',
      Route: 'blog',
    }
  ];
  constructor() {}
  CSSEffects = CSSEffects;
  ngOnInit(): void {}
}
