import { Component, OnInit, Output } from '@angular/core';
import { PortfolioCategory } from '../portfolio';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.less'],
})
export class FilterComponent {
  categories$ = this.portfolioService.portfolioCategories$;
  constructor(private portfolioService: PortfolioService) {
    this.categories$.subscribe(console.log)
  }
  toggleCategory(category: PortfolioCategory){
    this.portfolioService.toggleCategory(category);
  } 
}
