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

export const getAvailableMoviesGenres = (movies) => {
  let allGenres = [`All genres`];

  for (let movie of movies) {
    allGenres.push(movie.genre);
  }

  return new Set(allGenres);
};

export const getFilteredMovies = (movies, genre) => {
  const genresList = Array.from(getAvailableMoviesGenres(movies));

  if (genre === genresList[0]) {
    return movies;
  }

  return movies.filter((elem) => elem.genre === genre);
};
