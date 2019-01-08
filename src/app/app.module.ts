import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';
import {HttpClientModule} from "@angular/common/http";
import {AddUserComponent} from './user/add-user.component';
import { MovieComponent } from './movie/movie.component';
import { AddMovieComponent } from './movie/add-movie.component';
import { MovieService } from './movie/movie.service';
import { RecommendComponent } from './recommend/recommend.component';
import { ScrapeComponent } from './scrape/scrape.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    MovieComponent,
    AddMovieComponent,
    RecommendComponent,
    ScrapeComponent,
    SearchComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService,MovieService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
