import {createSelector} from 'reselect';
import {MAX_AMOUNT_GENRES} from '../util/const.js';

const moviesSelector = (state) => state.moviesList;
const genresSelector = (state) => state.genresList;

export const getAvailableMoviesGenres = createSelector([moviesSelector], (moviesList) => {
  let allGenres = [`All genres`];

  for (let movie of moviesList) {
    allGenres.push(movie.genre);
  }

  const availableGenres = new Set(allGenres);

  return Array.from(availableGenres).slice(0, MAX_AMOUNT_GENRES);
});

export const getFilteredMovies = createSelector([genresSelector, moviesSelector], (genre, moviesList) => {
  if (genre === `All genres`) {
    return moviesList;
  }

  return moviesList.filter((elem) => elem.genre === genre);
});
