import {Component, OnInit} from '@angular/core';
import {MovieListItemModel} from "../../models/movieListItem.model";
import {MovieService} from "../../services/movie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: MovieListItemModel[] = [];
  isFetching: boolean = true;


  constructor(private movieService: MovieService, private router: Router) {
  }

  ngOnInit() {
    this.loadMovies();
  }

  goToMovieDetails(id: number) {
    this.router.navigate(['/movie-details', id]);
  }

  private loadMovies() {
    this.movieService.fetchMovies().subscribe(
      (data) => {
        this.movies = data;
        this.isFetching = false;
      }
    );
  }

  deleteMovie(id: number) {
    this.movieService.deleteMovie(id).subscribe(
      () => this.loadMovies()
    );
  }
}
