import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {HttpClientModule} from "@angular/common/http";
import {AddMovieComponent} from './components/add-movie/add-movie.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    NavbarComponent,
    MovieDetailsComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
