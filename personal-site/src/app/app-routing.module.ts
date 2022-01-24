import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './screens/blog/blog.component';
import { HomeComponent } from './screens/home/home.component';


const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: '**', component: HomeComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
