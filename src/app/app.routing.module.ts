import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import {AddUserComponent} from './user/add-user.component';
import { AddMovieComponent } from './movie/add-movie.component';
import { MovieComponent } from './movie/movie.component';
import { RecommendComponent } from './recommend/recommend.component';
import { ScrapeComponent } from './scrape/scrape.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'movies', component: MovieComponent },
  { path: 'add-movie', component: AddMovieComponent },
  { path: 'recommend', component: RecommendComponent },
  { path: 'scrape', component: ScrapeComponent },
  { path: 'search', component: SearchComponent }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
