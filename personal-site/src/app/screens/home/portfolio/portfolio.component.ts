import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less'],
})
export class PortfolioComponent {
  content$ = this.portfolioService.portfolio$;
  constructor(private portfolioService: PortfolioService){

  }
}
