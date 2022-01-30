import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Portfolio, PortfolioCategory, PortfolioContent } from './portfolio';

class StorageService {
  get(categories: PortfolioCategory[] = []): Observable<Portfolio> {
    return of({
      content: [
        {
          Title: 'Get yeeted on.. nerd.',
          Categories: ['Yeet'],
        },
        {
          Title: 'This is a yeet again.',
          Categories: ['Yeet'],
        },
        {
          Title: 'Hi. I am all categories.',
          Categories: ['Yeet', 'Bob'],
        },
        {
          Title: 'No CG? Wow..',
          Categories: [],
        },
      ].filter((content)=> {
        if(!categories.length) return true;
        for (const category of categories){
          if (content.Categories.includes(category)) return true; 
        }
        return false;
      }),
      categories: ['Yeet', 'Bob'],
    });
  }
}

class PortFolioFilter{
  constructor(public display: string, public toggle:()=>void, public active = false){}
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioService extends StorageService {
  constructor(){
    super();
    this.reload();
  }
  private portfolioSubject = new BehaviorSubject<PortfolioContent[]>([]);
  portfolio$ = this.portfolioSubject.asObservable();

  private portfolioCategorySubject = new BehaviorSubject<PortFolioFilter[]>([]);
  portfolioCategories$ = this.portfolioCategorySubject.asObservable();
  private categoryFilter: PortfolioCategory[] = [];

  
  toggleCategory(category: PortfolioCategory) {
    const index = this.categoryFilter.indexOf(category);
    if (index >= 0) {
      this.categoryFilter.splice(index, 1);
    } else {
      this.categoryFilter.push(category);
    }
    console.log('After toggling: ' + category, this.categoryFilter);
    this.reload();
  }

  reload() {
    this.get(this.categoryFilter).subscribe((portfolio: Portfolio) => {

      this.portfolioCategorySubject.next(portfolio.categories.map(
        (category)=> new PortFolioFilter(category, ()=>this.toggleCategory(category), this.categoryFilter.includes(category))
      ));
      this.portfolioSubject.next(portfolio.content);
    });
  }
}
