import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {AddMovieComponent} from "./components/add-movie/add-movie.component";

const routes: Routes = [
  {path: 'movie-list', component: MovieListComponent },
  {path: 'movie-details/:id', component: MovieDetailsComponent },
  {path: 'add-movie', component: AddMovieComponent },
  {path: '**', redirectTo: '/movie-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
