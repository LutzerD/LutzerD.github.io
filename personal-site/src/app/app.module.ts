import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './screens/home/home.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { BlogComponent } from './screens/blog/blog.component';
import { RandomCssComponent } from './common/styling/random-css.component';
import { DuplicatesDirective } from './common/styling/duplicates.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    BlogComponent,
    RandomCssComponent,
    DuplicatesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
