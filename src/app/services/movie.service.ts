import {Injectable} from '@angular/core';
import {MovieListItemModel} from "../models/movieListItem.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieFormDataModel} from "../models/movieFormData.model";
import {FormInitDataItemModel} from "../models/formInitDataItem.model";
import {MovieDetailsItemModel} from "../models/movieDetailsItem.model";

const BASE_URL = 'http://localhost:8080/api/movies';


@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private http: HttpClient) {
  }

  fetchMovies(){
    return this.http.get<Array<MovieListItemModel>>(BASE_URL);
  }

  fetchFormInitData() {
    return this.http.get<FormInitDataItemModel>(BASE_URL + "/formData");
  }

  addMovie(formData: MovieFormDataModel): Observable<any> {
    return this.http.post(BASE_URL, formData);
  }

  fetchMovieDetails(id: number) {
    return this.http.get<MovieDetailsItemModel>(BASE_URL + "/" + id);
  }

  deleteMovie(id: number) {
    return this.http.delete(BASE_URL + "/" + id);
  }

}
