import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './screens/home/home.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { BlogComponent } from './screens/blog/blog.component';
import { RandomCssComponent } from './common/styling/random-css.component';
import { DuplicatesDirective } from './common/styling/duplicates.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HelloComponent } from './screens/home/hello/hello.component';
import { PortfolioComponent } from './screens/home/portfolio/portfolio.component';
import { ZigZagScrollDirective } from './common/directives/zig-zag-scroll.directive';
import { FilterComponent } from './screens/home/portfolio/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BlogComponent,
    RandomCssComponent,
    DuplicatesDirective,
    HelloComponent,
    PortfolioComponent,
    ZigZagScrollDirective,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    RouterModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
