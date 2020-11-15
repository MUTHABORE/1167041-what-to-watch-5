import {extend} from '../util/utils.js';
import {ActionType} from './action';

import {allMovies} from '../mocks/films.js';
import {getAvailableMoviesGenres, getFilteredMovies} from '../util/film.js';
import {AMOUNT_MOVIES_TO_RENDER} from '../util/const.js';

const initialState = {
  activeGenre: `All genres`,
  moviesList: allMovies,
  amountMoviesToRender: AMOUNT_MOVIES_TO_RENDER,
};

export const genresList = Array.from(getAvailableMoviesGenres(initialState.moviesList));

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });

    case ActionType.GET_MOVIES_LIST_BY_GENRE:
      return extend(state, {
        moviesList: getFilteredMovies(allMovies, action.payload),
      });

    case ActionType.SHOW_MORE_MOVIES:
      return extend(state, {
        amountMoviesToRender: action.payload,
      });
  }

  return state;
};

export {reducer};
