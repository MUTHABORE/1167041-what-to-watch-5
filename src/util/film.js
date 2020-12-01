import {extend} from '../util/utils.js';

export const getRatingFrase = (rating) => {
  switch (true) {
    case rating <= 3:
      return `Bad`;
    case rating > 3 && rating <= 5:
      return `Normal`;
    case rating > 5 && rating <= 8:
      return `Good`;
    case rating > 8 && rating < 10:
      return `Very Good`;
    case rating >= 10:
      return `Awesome`;
    default:
      return ``;
  }
};

export const adaptMovieToClient = (movie) => {
  const adaptedMovie = extend(
      movie,
      {
        poster: movie.poster_image,
        preview: movie.preview_image,
        background: movie.background_image,
        backgroundColor: movie.background_color,
        previewVideo: movie.preview_video_link,
        video: movie.video_link,
        votes: movie.scores_count,
        runtime: movie.run_time,
        isFavorite: movie.is_favorite,
      }
  );

  delete adaptedMovie.poster_image;
  delete adaptedMovie.preview_image;
  delete adaptedMovie.background_image;
  delete adaptedMovie.background_color;
  delete adaptedMovie.preview_video_link;
  delete adaptedMovie.video_link;
  delete adaptedMovie.scores_count;
  delete adaptedMovie.run_time;
  delete adaptedMovie.is_favorite;

  return adaptedMovie;
};
