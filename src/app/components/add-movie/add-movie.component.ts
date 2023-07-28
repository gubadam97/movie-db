import {Component, OnInit} from '@angular/core';
import {GenreOptionItemModel} from "../../models/genreOptionItem.model";
import {RatingOptionItemModel} from "../../models/ratingOptionItem.model";
import {MovieService} from "../../services/movie.service";
import {FormInitDataItemModel} from "../../models/formInitDataItem.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  form: FormGroup;
  genres!: GenreOptionItemModel[];
  ratings!: RatingOptionItemModel[];


  constructor(private movieService: MovieService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      releaseDate: [1950, Validators.required],
      genres: [null, Validators.required],
      ratings: [null, Validators.required],
      imageUrl: [''],
    });
  }

  ngOnInit(): void {
    this.movieService.fetchFormInitData().subscribe(
      (data: FormInitDataItemModel) => {
        this.genres = data.genres;
        this.ratings = data.ratings;
      }
    )
  }


  addMovie() {
    this.movieService.addMovie(this.form.value).subscribe(
      () => this.router.navigate(['movies'])
    );
  }
}

