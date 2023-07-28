import {GenreOptionItemModel} from "./genreOptionItem.model";
import {RatingOptionItemModel} from "./ratingOptionItem.model";

export interface FormInitDataItemModel {
  genres: GenreOptionItemModel[];
  ratings: RatingOptionItemModel[];
}
