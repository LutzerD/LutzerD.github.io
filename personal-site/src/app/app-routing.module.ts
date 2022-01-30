import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProductionOnlyGuard } from './common/production-only.guard';
import { BlogComponent } from './screens/blog/blog.component';
import { HomeComponent } from './screens/home/home.component';
import { PortfolioComponent } from './screens/home/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: 'experiment',
    component: PortfolioComponent,
    canActivate: [ProductionOnlyGuard],
  },
  { path: 'blog', component: BlogComponent },
  { path: 'experiment', component: BlogComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
