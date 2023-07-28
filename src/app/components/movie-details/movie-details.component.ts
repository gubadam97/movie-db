import {Component} from '@angular/core';
import {MovieListItemModel} from "../../models/movieListItem.model";
import {MovieService} from "../../services/movie.service";
import {ActivatedRoute} from "@angular/router";
import {MovieDetailsItemModel} from "../../models/movieDetailsItem.model";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  movie!: MovieDetailsItemModel;


  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      params => {
        const movieId = params['id'];
        this.loadMovieDetails(movieId);

      }
    )
  }

  private loadMovieDetails(movieId: number) {
this.movieService.fetchMovieDetails(movieId).subscribe(
  data => {
    this.movie = data;
  }
)

  }

  protected readonly moveBy = moveBy;
}
